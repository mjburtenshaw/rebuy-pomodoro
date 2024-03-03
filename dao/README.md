# rebuy-pomodoro-dao

The DAO for the rebuy-pomodoro database.

![Static Badge](https://img.shields.io/badge/version-0.4.0-aa3288?labelColor=3754d5)

## Table of Contents

- [Storage Objects](#storage-objects)

## Storage Objects

Storage objects uploaded in local environments are denoted with the `storage://` protocol. These assets can be located in the `storage` directory at the rebuy-pomodoro project root.

For some assets, such as sound-types, they're also stored in the web-client public folder. I did this so I didn't have to implement streaming assets to the web client from the API, which I don't think is pragmatic for the specification context.
