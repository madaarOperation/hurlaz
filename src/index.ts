// ===================================================
// Project: Hurlaz
// ===================================================
import * as core from "@actions/core";

// INFO: Hurl Types
interface HurlManager {
  version: string;
  compose: string;
  pattern: string;
  threshold: number;
  myHurlDownloader: (hurlManager: HurlManager) => Promise<void>;
  myHurlFinder: (HurlManager: HurlManager) => Promise<void>;
  myHurlRunner: (HurlManager: HurlManager) => Promise<void>;
  myHurlReporter: (HurlManager: HurlManager) => Promise<void>;
}

// INFO: Hurl Package Downloader
async function hurlDownloader(hurlManager: HurlManager): Promise<void> { }

// INFO: Hurl Script Finder
async function hurlFinder(hurlManager: HurlManager): Promise<void> { }

// INFO: Hurl Script Runner
async function hurlRunner(hurlManager: HurlManager): Promise<void> { }

// INFO: Hurl Final Reporter
async function hurlReporter(hurlManager: HurlManager): Promise<void> { }

// INFO: Entrypoint Function
async function run() {
  try {
    // 1. Create My Hurl Manager
    const myHurlManger: HurlManager = {
      version: core.getInput("hurl-version"),
      compose: core.getInput("compose-path"),
      pattern: core.getInput("hurl-pattern"),
      threshold: parseInt(core.getInput("threshold"), 100),
      myHurlDownloader: hurlDownloader,
      myHurlFinder: hurlFinder,
      myHurlRunner: hurlRunner,
      myHurlReporter: hurlReporter,
    };
    // 2. Download Hurl Package
    // 3. Check Hurl Script Location
    // 4. Run Hurl Script
    // 5. Extract Data Build Report
    // 2. Set the output
    core.setOutput("hurl-version", myHurlManger.version);
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}
run();
