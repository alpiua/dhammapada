
# Dhammapada — Ukrainian Translation (Nuxt 4)

This repository hosts a modernized version of the historical dhammapada.kiev.ua website, rebuilt on Nuxt 4.

It is located on https://dhammapada.pp.ua

## What’s inside

- __Nuxt 4.0.3__
- __Tailwind CSS v3__ via `@nuxtjs/tailwindcss`
- __Typography plugin__ `@tailwindcss/typography` for nicer Markdown rendering
- __@nuxt/content__ for Markdown-based pages and front‑matter SEO via `useContentHead`
- __Google Fonts (Noto Serif)__ configured in `nuxt.config.ts`
- __Vertical sidebar menu__ with sticky sidebar and content-only scrolling

## Project structure

- `app.vue` — app shell, vertical menu and layout
- `pages/index.vue` — homepage with SEO meta
- `pages/[...slug].vue` — dynamic renderer for Markdown content from `content/`
- `pages/vstup-vid-maksyma-kopanytsi.vue` — styled page for the translator’s introduction
- `content/` — Markdown content (chapters, intro, etc.)
- `assets/css/tailwind.css` — Tailwind directives
- `tailwind.config.ts` — Tailwind Typography plugin setup
- `nuxt.config.ts` — Nuxt, Tailwind and Content configuration, Google Fonts

## Local development

```bash
yarn install
yarn dev
```

Open <http://localhost:3000>

## Contributing

PRs improving the text, fixing typos, or enhancing the UI/UX are welcome. For substantial content updates, please open an issue first.

## Credits

- Original content: dhammapada.kiev.ua (recovered via Web Archive)
- Ukrainian translation by Maksym Kopanytsia

## License

Content may be subject to the terms of the original authors/translators. Code in this repository is MIT unless noted otherwise.
