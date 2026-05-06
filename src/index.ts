// ===================================================
// Project: Hurlaz
// ===================================================
import * as core from "@actions/core";

async function run() {
  try {
    // 1. Get the input
    const version = core.getInput("hurl-version");
    core.info(`Peraring to use Hurl version ${version}`);

    // 2. Set the output
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}
