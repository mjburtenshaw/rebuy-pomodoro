# rebuy-pomodoro

A web-based Pomodoro timer.

Skip to [Usage](#usage) to get going.

![Static Badge](https://img.shields.io/badge/version-1.0.0-aa3288?labelColor=3754d5)

## Table of Contents

- [People](#principals)
- [Policies](#policies)
  - [Version Control](#version-control)
- [Procedures](#procedures)
  - [Usage](#usage)
- [Platforms](#platforms)
- [Philosophy](#philosophy)
  - [Architecture](#architecture)

## People

| Name               | Role   | Email                  |
| ------------------ | ------ | ---------------------- |
| Malcolm Burtenshaw | Author | mjburtenshaw@gmail.com |

## Policies

### Documentation

- Update appropriate **DOCFILES**, e.g., `README` or `TECHNOLOGIES`, if changelogs modify how developers can interact with the application, such as modifying scripts. In all such cases, also update the version symbols in this document, [`package.json`](package.json), and [`package-lock.json`](package-lock.json).
- Update the `version` property in [`client/package.json`](client/package.json) and [`client/package-lock.json`](client/package-lock.json) when modifying how users can interact with the client.
- All **DOCFILES** should be referenced in this document to improve discoverability.

### Version Control

- Commit early and often.
- Adhere to [the Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/).
- Adhere to [the Semantic Versioning specification](https://semver.org).

## Procedures

### Setup

1. Verify you have a Docker engine installed on your machine such as [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Run the setup script:

```shell
./scripts/setup.sh
```

3. Change environment variables as desired in the newly created `db/.env` file.

### Usage

1. Verify you have performed [setup](#setup).
2. In a shell, start the backend services and web client:

```shell
npm run dev
```

3. In a web browser, navigate to the URL printed in the terminal to visit the client.

## Platforms

This project is [hosted on GitHub](https://github.com/mjburtenshaw/rebuy-pomodoro).

## Philosophy

See [SPECIFICATIONS](SPECIFICATIONS.md) for the project genesis.

### Architecture

The application is divided into sub-projects to separate concerns using layered architecture. In a production project, I would separate all these into proper version control repositories. This project is architected as a distributed monolith to simplify the review process for interviewers. Here are the layers in this project:

- **rebuy-pomodoro**: This is the current layer, and what I would call the Developer Experience layer. Everything that concerns composing related projects together goes here; and yes, in a production project, this would get its own repository.
- **db**: The persistence layer. Concerned with persisting entity data in whatever format is required. For example, if the application required a NoSQL and a relational database to store data for entities in the same domain, both database configurations would go in this project.
- **dao**: The data access object layer. Concerned with fielding requests from APIs to the database layer. Each database project gets its own DAO, and as far as the database is concerned, this is its only client.
- **api**: The API layer. Concerned with fielding requests from clients to compute, persistence, and storage services.
- **web-client**: An implementation at the client layer. Concerned with fielding requests from humans to APIs via a single-page application (SPA). Because it is an SPA, it is designed to be lightweight by not concerning itself with defining UI components or performing data transformations. In my opinion, a well-designed SPA makes it easy for developers to make web forms and quick for users to access APIs as quickly as possible. Note that _web_ is included in the nomenclature; this suggests that interchangeable clients can use the same API and UI library, e.g., web extension clients (Chrome), app extension clients (Creative Cloud), and mobile clients (App Store).
- **ui**: The UI/UX layer. Concerned with enforcing a consistent user experience across all clients. I find having this separated from clients makes it easier for UI/UX Designers to assert control that they lack in other architectures by involving them directly in the review process without hindering the development of new API features.

One advantage of this is that each layer isn't restricted by the technologies used in other layers, making it easier to pick the right tool for the job.

This architecture is designed to optimize for the business and the user's ease-of-use first, then operators, then developers.

user > ops > dev

biz > ops > dev

biz ≹ user

More on that philosophy in [_Code is run more than read_](https://olano.dev/2023-11-30-code-is-run-more-than-read/) by Facundo Olano.
