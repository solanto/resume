# my résumé

I got tired of shuffling around tables in Google Docs when all I wanted was to edit semantic content. I designed a workflow around a concrete schema for my résumé's information instead; I can edit my [content in YAML](src/data), templates in [WebC](https://www.11ty.dev/docs/languages/webc/) HTML, and styles in CSS, all via the [Eleventy](https://www.11ty.dev/) static site generator. Delightful!

## installing

This project uses [pnpm](https://pnpm.io/). Its [package scripts](package.json#L6) are written for [POSIX-compliant shells](https://en.wikipedia.org/wiki/Comparison_of_command_shells) but have also been tested to work in [fish](https://fishshell.com/).

```bash
pnpm install
```

Content schemas are defined using [Zod](https://zod.dev/), in [`src/data/index.js`](src/data/index.js). In a typechecking editor: this automatically enables typechecks for this project's JavaScript data, but not its YAML data. Generate JSON schemas for YAML typechecks using the project's built-in scripts. These schemas will appear in a new `dev` directory and are preconfigured to work in [VS Code](https://code.visualstudio.com/).

```bash
pnpm generate-data-schemas
```

Start Eleventy's dev server with `pnpm dev`.

## typesetting your résumé for paper

Most browsers should let you "print" the page to a PDF file through their print dialogs.

[Blink-based browsers](https://en.wikipedia.org/wiki/List_of_web_browsers#Blink-based) like Chromium, Chrome, and Edge seem to produce more machine-readable PDFs than—for example—[Gecko-based browsers](https://en.wikipedia.org/wiki/List_of_web_browsers#Gecko-based) like Firefox. This is important for [screen readers](https://en.wikipedia.org/wiki/Screen_reader), as well as [applicant tracking systems](https://en.wikipedia.org/wiki/Applicant_tracking_system) (ATS).

## license

Unless specified otherwise at the beginning of a file, this work falls under the [GNU General Public License v3.0 or later](https://spdx.org/licenses/GPL-3.0-or-later.html). See license text in [`LICENSE.md`](LICENSE.md).

Résumé content, contained in `src/data` and marked in-file with the appropriate SPDX license identifier, falls under the [Creative Commons Attribution-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nd/4.0/) license. See license text in [`LICENSE.CC-BY-ND-4.0.md`](LICENSE.CC-BY-ND-4.0.md)