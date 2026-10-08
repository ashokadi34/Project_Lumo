# Project Lumo — Frontend Application

A demo frontend application built with **React** and **TypeScript**, created for **UI development, testing, and learning purposes**.

## Project Lumo focuses on building and experimenting with frontend interfaces, reusable UI components, and testable application flows.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Running the Application](#running-the-application)
* [Production Build](#production-build)
* [Testing](#testing)
* [Available Scripts](#available-scripts)
* [Environment Variables](#environment-variables)
* [Project Structure](#project-structure)
* [Purpose](#purpose)
* [Contributing](#contributing)
* [Troubleshooting](#troubleshooting)
* [License](#license)
* [Author](#author)

---

## Overview

**Project Lumo** is a frontend demo application developed using **React** and **TypeScript**.

The project is primarily intended for:

* UI development
* Frontend experimentation
* Software testing
* Automation testing practice
* Learning React and TypeScript
* Exploring reusable UI components
* Creating testable application workflows

This project can also be used as a demo application for practicing **functional, UI, regression, and automation testing**.

---

## Features

* React-based frontend application
* TypeScript for type-safe development
* Component-based UI architecture
* UI-focused demo workflows
* Reusable frontend components
* Suitable for manual and automation testing
* Suitable for learning and experimentation
* Easy to extend with additional pages and features

> The application is intentionally designed as a demo/testing project and can be extended as new UI and testing scenarios are introduced.

---

## Tech Stack

### Frontend

* **React**
* **TypeScript**
* **HTML5**
* **CSS**

### Development & Testing

* Node.js
* npm
* Git
* GitHub

Additional libraries and tools can be added as the project evolves.

---

## Prerequisites

Before running the project locally, make sure the following are installed:

* **Node.js**
* **npm**
* **Git**

Verify the installations:

```bash
node -v
npm -v
git --version
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ashokadi34/Project_Lumo.git
```

Navigate to the frontend application:

```bash
cd Project_Lumo/front_end_v1
```

Install project dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server using the script configured in `package.json`.

For a Vite-based application:

```bash
npm run dev
```

For a Create React App-based application:

```bash
npm start
```

After starting the application, open the local URL displayed in the terminal.

---

## Production Build

Create a production-ready build:

```bash
npm run build
```

The generated build can then be deployed to a suitable hosting platform.

---

## Testing

This project is designed to support UI and automation testing.

If a test framework is configured in the project, run the available test command:

```bash
npm test
```

Testing can be extended to cover areas such as:

* Functional testing
* UI testing
* Regression testing
* Component testing
* End-to-end testing
* Browser automation testing

---

## Available Scripts

The available npm scripts depend on the configuration in `package.json`.

Common scripts include:

```bash
npm run dev
npm run build
npm test
npm run lint
```

Use the following command to see the exact scripts configured in the project:

```bash
npm run
```

---

## Environment Variables

If the application requires environment-specific configuration, create a `.env` file in the appropriate project directory.

Example:

```env
REACT_APP_API_URL=http://localhost:8080
```

> Use the environment variable naming convention required by the frontend build tool configured in the project.

Do not commit secrets, API keys, passwords, tokens, or other sensitive information to GitHub.

Add `.env` to `.gitignore`:

```gitignore
.env
.env.local
```

---

## Project Structure

The project structure may evolve as new features and testing scenarios are added.

Current frontend structure:

```text
Project_Lumo/
└── front_end_v1/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   ├── styles/
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    ├── tsconfig.json
    └── README.md
```

### Directory Purpose

| Directory       | Purpose                                     |
| --------------- | ------------------------------------------- |
| `public/`       | Static assets and public resources          |
| `src/`          | Main application source code                |
| `components/`   | Reusable UI components                      |
| `pages/`        | Application pages and page-level components |
| `hooks/`        | Custom React hooks                          |
| `styles/`       | Global styles and UI styling                |
| `App.tsx`       | Main application component                  |
| `main.tsx`      | Application entry point                     |
| `package.json`  | Project dependencies and npm scripts        |
| `tsconfig.json` | TypeScript configuration                    |

---

## Purpose

Project Lumo is primarily a **learning, testing, and demonstration application**.

It can be used as a frontend application for practicing:

* React development
* TypeScript development
* UI testing
* Test automation
* Selenium automation
* Playwright automation
* API integration testing
* Regression testing
* End-to-end testing

The application can be expanded with additional UI workflows specifically designed for software testing and automation practice.

---

## Contributing

This is primarily a personal demo and learning project, but improvements and suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feat/my-feature
```

3. Make your changes.
4. Test the changes locally.
5. Commit the changes with a clear message:

```bash
git commit -m "Add new UI component"
```

6. Push the branch:

```bash
git push origin feat/my-feature
```

7. Create a Pull Request.

---

## Troubleshooting

### Development server fails to start

Check your Node.js and npm versions:

```bash
node -v
npm -v
```

Then reinstall the project dependencies:

```bash
rm -rf node_modules
npm install
```

On Windows Command Prompt, you can use:

```cmd
rmdir /s /q node_modules
npm install
```

If the issue persists, check the error message and verify that the installed Node.js version is compatible with the project's dependencies.

---

## License

This project is intended for **learning, testing, and demonstration purposes**.

![License](https://img.shields.io/badge/License-MIT-green)

---

## Author

**Kumar Ashok**

GitHub:
https://github.com/ashokadi34

---

## Thanks

Thank you for visiting **Project Lumo**.

This project is continuously used for learning, experimentation, UI development, and software testing practice.
