# Hurlaz

Hurlaz is a custom GitHub Action for running `hurl` scripts inside CI/CD workflows. It provides a simple way to automate API and integration testing while managing application environments with Docker Compose.

---

## Features

* Execute `hurl` scripts directly in GitHub Actions
* Automate environment orchestration using Docker Compose
* Configure Hurl versions dynamically
* Support custom glob patterns for test discovery
* Define acceptable test failure thresholds

---

## Project Structure

```text id="v7n2x1"
Hurlaz
├── action.yml           # GitHub Action entrypoint
├── demo                 # Demo application
├── jest.config.js       # Jest configuration
├── lib                  # Compiled JavaScript output
├── license.txt          # License file
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Dependency lock file
├── Readme.md            # Project documentation
├── src                  # Source code
│   ├── appManager.ts    # Application orchestration manager
│   ├── hurlManager.ts   # Hurl execution manager
│   ├── index.ts         # Action entrypoint
│   └── types.ts         # Shared TypeScript types
└── tsconfig.json        # TypeScript configuration
```

---

## Requirements

Before using Hurlaz, ensure the following tools are available in your environment:

* Docker
* Docker Compose
* GitHub Actions runner

---

## Usage

Add the action to your GitHub Actions workflow:

```yaml id="a2b3c4"
- name: Run Hurl Tests
  uses: madaraaoperation/hurlaz@v1
  with:
    hurl-version: "8.0.0"
    docker-compose: "docker-compose.dev.yml"
    hurl-pattern: "test/**/*"
    threshold: 1
```

---

## Inputs

| Input            | Description                                   | Default                  |
| ---------------- | --------------------------------------------- | ------------------------ |
| `hurl-version`   | Version of Hurl to install and use            | `8.0.0`                  |
| `docker-compose` | Path to the Docker Compose configuration file | `docker-compose.dev.yml` |
| `hurl-pattern`   | Glob pattern used to locate Hurl test files   | `test/**/*`              |
| `threshold`      | Maximum accepted number of failed tests       | `1`                      |

---

## Example Workflow

```yaml id="d5e6f7"
name: Hurl Tests

on:
  push:
    branches:
      - main

jobs:
  hurl-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Hurlaz
        uses: madaraaoperation/hurlaz@v1
        with:
          hurl-version: "8.0.0"
          docker-compose: "docker-compose.dev.yml"
          hurl-pattern: "test/**/*"
          threshold: 1
```

---

## Development

### Install Dependencies

```bash id="g8h9i0"
npm install
```

### Build Project

```bash id="j1k2l3"
npm run build
```

### Run Tests

```bash id="m4n5o6"
npm run test
```

### Run Linter

```bash id="p7q8r9"
npm run lint
```

### Format Code

```bash id="s1t2u3"
npm run format
```

---

## License

This project is licensed under the terms defined in `license.txt`.

