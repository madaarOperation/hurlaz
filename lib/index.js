// ===================================================
// Project: Hurlaz
// ===================================================
import * as core from "@actions/core";
// INFO: Hurl Types
// INFO: Hurl Downloader
// INFO: Hurl Finder
// INFO: Hurl Runner
// INFO: Hurl reporter
// INFO: Entrypoint Function
async function run() {
    try {
        // 1. Get the input
        const version = core.getInput("hurl-version");
        core.info(`Peraring to use Hurl version ${version}`);
        // 2. Set the output
        core.setOutput("hurl-version", version);
    }
    catch (error) {
        if (error instanceof Error)
            core.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=index.js.map