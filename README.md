# raif-sh.github.io

These a personal notes related to projects shared across all devices.


## How to compile css style for production
<!-- Run the CLI tool to scan your template files for classes and build your CSS. -->
npx tailwindcss -i ./src/input.css -o ./src/style.css --watch


<!-- If you’re using Tailwind CLI, you can minify your CSS by adding the --minify flag: -->
npx tailwindcss -o build.css --minify