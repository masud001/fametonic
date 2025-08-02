# Fametonic

Fametonic is a Svelte-based project designed to help users turn social media into a profitable career. This project is powered by [`sv`](https://github.com/sveltejs/cli) and includes features like announcements, responsive design, and integration with TailwindCSS.

## Features

- **Responsive Design**: Built with TailwindCSS for seamless responsiveness.
- **Announcements**: Dynamic announcement bar for displaying important updates.
- **Custom Fonts**: Uses Figtree and Urbanist fonts for a modern look.
- **SEO Optimized**: Includes meta tags for better search engine visibility.

## Creating a Project

To create a new project using `sv`:

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app


## Developing

Once you've created a project and installed dependencies with npm install (or pnpm install or yarn), start a development server:

`npm run dev`

# or start the server and open the app in a new browser tab

`npm run dev -- --open`

Building
To create a production version of your app:

npm run build

You can preview the production build with:

npm run preview



Repository and Live Demo
GitHub Repository: Fametonic Repository
Live Demo: Fametonic Live Demo
Lighthouse Performance
Mobile View
Lighthouse Mobile Screenshot

Desktop View
Lighthouse Desktop Screenshot


## Project Structure

```

fametonic/
├── src/
│ ├── lib/
│ │ ├── components/ # Reusable Svelte components
│ │ ├── fonts/ # Custom fonts (Figtree, Urbanist)
│ │ └── types.ts # Type definitions
│ ├── routes/ # SvelteKit routes
│ ├── app.css # Global styles
│ └── app.html # HTML template
├── static/
│ ├── assets/ # Static assets
│ ├── data/ # JSON data files
│ ├── images/ # Images used in the app
│ └── screenshots/ # Lighthouse screenshots
├── package.json # Project dependencies and scripts
├── svelte.config.js # Svelte configuration
├── vite.config.ts # Vite configuration
└── README.md # Project documentation

````

## Creating a Project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
````

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.
# fametonic
