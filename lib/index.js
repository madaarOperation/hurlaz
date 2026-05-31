// ===================================================
// Project: Hurlaz
// ===================================================
import * as core from "@actions/core";
class HurlManager {
    version;
    compose;
    pattern;
    threshold;
    constructor() {
        this.version = core.getInput("hurl-version");
        this.compose = core.getInput("compose-path");
        this.pattern = core.getInput("hurl-pattern");
        this.threshold = Number(core.getInput("threshold"));
    }
    // INFO: Hurl Package Downloader
    async download() {
        core.info(`Downloading Hurl ${this.version}...`);
    }
    // INFO: Hurl Script Finder
    async find() {
        core.info(`Finding Hurl files matching "${this.pattern}"...`);
    }
    // INFO: Hurl Script Runner
    async execute() {
        core.info("Running Hurl tests...");
    }
    // INFO: Hurl Final Reporter
    async report() {
        core.info("Generating report...");
    }
    // INFO: Main workflow
    async start() {
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
async function run() {
    try {
        const hurl = new HurlManager();
        await hurl.start();
    }
    catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
        else {
            core.setFailed(String(error));
        }
    }
}
run();
//# sourceMappingURL=index.js.map