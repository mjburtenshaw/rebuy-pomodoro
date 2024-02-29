# Contributing

🚨 **Important:** When using `@mui/icons-material`, always import icons using named imports from the barrel file. [Consumers of this library will otherwise run into import resolution issues](https://stackoverflow.com/questions/72008357/mui-icons-used-in-shared-react-component-library-wont-render-error-element-ty/76781609#76781609).

🎙️ Consult your technical lead and designer before updating this library.

🆕 Extend modules and elements before creating new ones.

📦 Keep everything in the same directory where you can.

🎓 If you can use a hook or utility belonging to an existing resource without changing it, promote the code to the general hooks or utils directory.

👯 If there are multiple of the same component type in a directory, create a subdirectory for that component type.

1️⃣ If a refactor leaves a file the only of its type in its directory, remove the subdirectory and promote the file to the main directory.

✅ When you are done with changes, run `npm run publish-storybook` to generate a new Storybook build for your designer to review.

🪝 Remember to export new element hooks from the [the main index file](./lib/index.ts)!
