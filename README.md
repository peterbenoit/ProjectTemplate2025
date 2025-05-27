# ProjectTemplate2025

A modern project template to kickstart your next project in 2025.

## Features

-   Organized folder structure
-   Example scripts in `scripts/`
-   Documentation in `docs/`

## Getting Started

1. Clone the repository:
    ```sh
    git clone https://github.com/peterbenoit/ProjectTemplate2025.git
    ```
2. Explore the `docs/` folder for project outlines and AI prompts.
3. Use scripts in `scripts/` to automate tasks.

## Folder Structure

```
ProjectTemplate2025/
├── README.md
├── package.json
├── sitemap.xml
├── docs/
│   ├── ai.prompt.md
│   ├── segment.01.md
│   └── project.outline.md
└── scripts/
    ├── generate-icons.py
    ├── project-dump.js
    ├── update-sitemap.js
    └── README.md
```

## File Definitions

### docs/

-   **ai.prompt.md**: Contains example AI prompts or instructions for leveraging AI tools in your project.
-   **segment.01.md**: A segment or chapter of project documentation, useful for breaking down large docs into manageable parts.
-   **project.outline.md**: The main outline or roadmap for the project, summarizing goals, milestones, and structure.

### scripts/

-   **generate-icons.py**: Python script for generating various website icon sizes from a source image, including transparent background options.
-   **project-dump.js**: Example script for automating project-related tasks, such as exporting or summarizing project data; used for passing project files/folders to ChatGPT for evaluation.
-   **update-sitemap.js**: Automatically updates the `lastmod` date in sitemap.xml to the current date during build processes. Works with any build tool (Vite, Webpack, Next.js, etc.).

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT
