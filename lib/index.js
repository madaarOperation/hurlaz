// ===================================================
// Project: Hurlaz
// ===================================================
import * as core from "@actions/core";
class HurlManager {
    version;
    compose;
    pattern;
    vars;
    threshold;
    constructor() {
        this.version = core.getInput("hurl-version");
        this.compose = core.getInput("compose-path");
        this.pattern = core.getInput("hurl-pattern");
        this.vars = core.getInput("hurl-vars");
        this.threshold = Number(core.getInput("threshold"));
    }
    // INFO: Hurl Package Downloader
    async download() {
        core.startGroup("Download Hurl Binary");
        core.info(`Downloading Hurl ${this.version}...`);
        core.endGroup();
    }
    // INFO: Hurl Script Finder
    async find() {
        core.startGroup("Find Hurl Scripts");
        core.info(`Finding Hurl files matching "${this.pattern}"...`);
        core.endGroup();
    }
    // INFO: Hurl Script Runner
    async execute() {
        core.startGroup("Execute Hurl Scripts");
        core.info("Running Hurl tests...");
        // hurl --variables-file vars.env --test *.hurl -v
        core.endGroup();
    }
    // INFO: Hurl Final Reporter
    async report() {
        core.startGroup("Generate Test Report");
        core.info("Generating report...");
        core.endGroup();
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