# Technologies

An overview of the project's technologies and tools.

## Table of Contents

- [Core Technologies](#core-technologies)
- [Development Tools](#development-tools)
- [Scripts](#scripts)
  - [Client](#client)

## Core Technologies

- [**cors**](https://github.com/expressjs/cors#readme) allows Cross-Origin Resource Sharing on the application.
- [**dotenv**](https://www.dotenv.org/docs): A solution for managing secrets. Because of their sensitive nature, `.env` configuration files aren't committed to the changelog. You can view the keys and recommended values for non-sensitive variables in `sample.env` files. Please reach out to your technical lead to get secret values.
- [**Express**](https://expressjs.com): A web framework for the API source.
- [**node-http-status**](https://github.com/adaltas/node-http-status): A solution for referencing a full library of HTTP status codes.
- [**React**](https://react.dev): A JavaScript library for building user interfaces. It is used as the primary UI library in this project.
- [**uuid**](https://github.com/uuidjs/uuid#readme): To easily generate unique IDs everywhere needed.
- [**winston**](https://github.com/winstonjs/winston): A robust logging solution. We create an adapter for it and feed it through our logger utility.

## Development Tools

- [**ESLint**](https://eslint.org): A static code analysis tool for identifying problematic patterns found in JavaScript code. It's extendable and configurable, ensuring code quality and consistency.
- [**Prettier**](https://prettier.io): A code formatter to ensure consistent style.
- [**tsx**](https://github.com/privatenumber/tsx#readme): to run API source code for development.
- [**TypeScript**](https://www.typescriptlang.org): An open-source language which builds on JavaScript by adding static type definitions, aiming to improve the development and maintainability of large JavaScript codebases.
- [**Vite**](https://vitejs.dev): A modern frontend build tool that significantly improves the frontend development experience. It's faster than traditional tools like Webpack because it minimizes bundling during development.

## Scripts

- **dev**: Starts a client development server.
- **format**: Formats all files in the project using Prettier, except those specified in `*ignore` files.
- **setup**: Generates initial dotenv files.

### API

- **dev**: Uses tsx to compile TS files to JS and serve them.

### Client

- **build**: Builds the project using TypeScript compiler and Vite build.
- **dev**: Runs the project in development mode using Vite.
- **lint**: Lints the project codebase using ESLint.
- **preview**: Provides a preview of the built project using Vite.
