# Segment 01: EXAMPLE of Project Bootstrapping

## Objective

Initialize the Porkbun Domain Search Tool project by setting up the foundational directory structure, development environment, and configuration required to support future segments.

This project will be hosted on Vercel, so set it up accordingly

## Tasks

-   Create a new project directory with the following structure:

    ```
    /public
    /src
      /api
      /lib
      /utils
    /docs
    .env
    README.md
    next.config.js
    package.json
    ```

-   Initialize the project using a React-based framework (e.g., Next.js).
-   Set up environment variable support via `.env` for storing Porkbun API credentials.
-   Configure rate-limiting constants and request throttle utility in `src/utils/throttle.js`.
-   Set up a basic homepage route in `pages/index.js` with placeholder UI for domain length and TLD input.
-   Install essential dependencies (`axios`, `dotenv`, etc.).
-   Add README.md with setup and development instructions.

## Notes

-   The `.env` file contains `PORKBUN_API_KEY` and `PORKBUN_SECRET_KEY`.
-   No need to implement domain logic yet—just wire the scaffolding to support upcoming segments.
-   This setup should be compatible with future Vercel deployment but is intended for local dev use initially.
