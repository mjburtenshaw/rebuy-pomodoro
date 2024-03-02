# rebuy-pomodoro-web-client

The web client for the rebury-pomodoro application.

![Static Badge](https://img.shields.io/badge/version-0.2.0-aa3288?labelColor=3754d5)

## Table of Contents

- [Organization](#organization)

## Organization

The client source code is divvied up like so:

- **contexts**: For managing state. This is about as brainy as the client gets.
- **hooks**: Helpers for keeping state handlers centralized and DRY.
- **pages**: Entire views. Pages compose view templates and infuse them with context data.
- **services**: If we need to talk to something outside the client, this is where that code goes.
- **templates**: Semantic components whose purpose is to layout UI elements.
- **utils**: General purpose code that doesn't manage state and isn't tied to a particular page.
