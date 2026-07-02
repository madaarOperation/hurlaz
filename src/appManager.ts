import * as exec from '@actions/exec';
import * as core from '@actions/core';

export class AppManager {
  public composeFilePath: string;

  constructor() {
    // Read the path from the user's workflow, default to 'docker-compose.yml'
    this.composeFilePath = core.getInput("compose-path") || 'docker-compose.yml';
  }

  // 1. Start the application
  async startApp(): Promise<void> {
    core.startGroup("Start Docker Application");
    core.info(`Starting application using ${this.composeFilePath}...`);
    
    // Run docker compose up in detached mode
    await exec.exec('docker', ['compose', '-f', this.composeFilePath, 'up', '-d']);
    
    // CRITICAL: Wait for the app to be ready
    await this.waitForPort(8000);
    core.endGroup();
  }

  // 2. Shut down the application
  async stopApp(): Promise<void> {
    core.startGroup("Stop Docker Application");
    core.info('Shutting down application...');
    await exec.exec('docker', ['compose', '-f', this.composeFilePath, 'down']);
    core.endGroup();
  }

  // 3. The Health Check (Polling)
  private async waitForPort(port: number, maxRetries: number = 30): Promise<void> {
    core.info(`Waiting for application to be ready on port ${port}...`);
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        // Ping the port using curl
        const exitCode = await exec.exec('curl', ['-s', `http://localhost:${port}`], { ignoreReturnCode: true });
        
        if (exitCode === 0) {
          core.info('✅ Application is up and responding!');
          return;
        }
      } catch (error) {
        // Ignore errors and keep trying
      }
      
      core.info(`Attempt ${i + 1}/${maxRetries} failed. Retrying in 2 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    throw new Error(`Application failed to start on port ${port} after ${maxRetries} attempts.`);
  }
}