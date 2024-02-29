## rebuy-pomodoro-ui

The UI library for the rebuy-pomodoro application.

![Static Badge](https://img.shields.io/badge/version-1.0.0-aa3288?labelColor=3754d5)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Library](#library)
  - [Auxiliary Resources](#auxiliary-resources)
- [See Also](#see-also)

## Installation

1. Run the following command in this directory:

```shell
npm link
```

2. Run the following command in the consuming project:

```shell
npm link rebuy-pomodoro-ui
```

## Usage

🛒 Browse the element library first to see if a configuration is available that meets your needs.

🧭 You can explore the rendered elements and their states using [Storybook](https://storybook.js.org):

```shell
npm install && npm run storybook
```

❌ Don't import elements for use in your project.

✅ Do import modules. For example:

```typescript
// MyTemplate.tsx

import { TypographyGroup } from 'ui';
```

🫥 See [Contributing](CONTRIBUTING.md) if you can't find an element or module configuration that meets your needs.

## Library

Primary resources include modules, svg, themes, types, and constants.

These are all intended for use in your project.

- **Element Hooks**: React Hooks required for the main element component to handle state. Other element resources are considered [auxiliary](#auxiliary-resources).
- **Modules**: Modules are the primary interface to use our elements. Their purpose is to compose different groupings of elements.
- **SVGs**: SVGs are React components that wrap around svg elements.
- **Themes**: Themes has all the resources relating to theming elements.
- **Types**: Just in case you need to work with our types in your project. All types for [auxiliary resources](#auxiliary-resources) are also available to use.
- **Constants**: Any variables shared between resource types.

### Auxiliary Resources

These are not intended for direct use in your project. These should support the functionality of primary resources.

#### Elements

The basic building blocks of our UI. They are organized in a few different layers:

- Hooks: React Hooks required for the main component to handle state.
- The main component: An unstyled framework from which to hang styles, data, and functions for particular HTML elements.
- The styled component: A layer of abstraction to manage which styles to send to the main component.
- Mocks: Seed data for each state a component can exist in. This is used for Storybook, but also handy for tests; this is why they're decoupled from stories.
- Stories: The file that Storybook uses to render our components for exploration.

Only the following should be exported from the element resource:

- Hooks.
- Types.
- Mocks.
- The styled component.

#### Utils

These are utilities used by multiple resources to transform data.

## See Also

- [Storybook](https://storybook.js.org)
