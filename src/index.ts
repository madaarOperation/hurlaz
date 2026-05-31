// ===================================================
// Project: Hurlaz
// ===================================================
import * as core from "@actions/core";

class HurlManager {
  public version: string;
  public compose: string;
  public pattern: string;
  public vars: string;
  public threshold: number;

  constructor() {
    this.version = core.getInput("hurl-version");
    this.compose = core.getInput("compose-path");
    this.pattern = core.getInput("hurl-pattern");
    this.vars = core.getInput("hurl-vars");
    this.threshold = Number(core.getInput("threshold"));
  }

  // INFO: Hurl Package Downloader
  async download(): Promise<void> {
    core.startGroup("Download Hurl Binary");
    core.info(`Downloading Hurl ${this.version}...`);
    core.endGroup();
  }

  // INFO: Hurl Script Finder
  async find(): Promise<void> {
    core.startGroup("Find Hurl Scripts");
    core.info(`Finding Hurl files matching "${this.pattern}"...`);
    core.endGroup();
  }

  // INFO: Hurl Script Runner
  async execute(): Promise<void> {
    core.startGroup("Execute Hurl Scripts");
    core.info("Running Hurl tests...");
    // hurl --variables-file vars.env --test *.hurl -v
    core.endGroup();
  }

  // INFO: Hurl Final Reporter
  async report(): Promise<void> {
    core.startGroup("Generate Test Report");
    core.info("Generating report...");
    core.endGroup();
  }

  // INFO: Main workflow
  async start(): Promise<void> {
    await this.download();
    await this.find();
    await this.execute();
    await this.report();

    core.setOutput("hurl-version", this.version);
  }
}

// ===================================================
// Entrypoint
// ===================================================

async function run(): Promise<void> {
  try {
    const hurl = new HurlManager();
    await hurl.start();
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(String(error));
    }
  }
}

run();
