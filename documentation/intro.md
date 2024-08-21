# Intro to Next.js

Next.js is a powerful React framework that enables developers to create server-rendered and statically generated websites. I created this guide to help me learn the concepts. I hope it helps!

## Explanation

Next.js is a single-page React-based framework that runs on the server. It creates pre-rendered React websites using two main techniques: **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**.

### What is Server-Side Rendering (SSR)?

Server-Side Rendering (SSR) means that the React components are rendered on the server, and the resulting HTML is sent to the browser. This can improve SEO and initial load times.

### What is Static Site Generation (SSG)?

Static Site Generation (SSG) allows you to generate static HTML pages at build time. These pages can be served quickly without needing a server to render them on the fly.

### What is the Pages Router?

The Pages Router in Next.js manages routes based on the file structure within the `pages` directory.

![Pages Directory](./images/pages_dir.png)

_Fig. A file or directory you put in the `pages` directory will become a new route!_

The `index.tsx` file nested under each directory is the component that will be rendered when the user lands on the page.

### Example Routes

-   `http://localhost:3000/client-side-fetching`
-   `http://localhost:3000/sample-app/trainers`

## The Flow of NextJs

Our **React Components are already rendered into HTML by the time it hits the browser**! Once it reaches the browser it can behave like a Single Page Application.

## React Without NextJs

React renders components in the browser. This is client - side rendering and it takes longer.

## Benefits of NextJs

-   **Improves Performance** Static Site Generation and Server Side Rendering pre-rendered the app, meaning less work for the browser.

-   **Better SEO** Since Websites are pre-rendered and a correct HTML is created with all the data this means that web-crawlers and search engines will find relevant content in your website faster.

## How it all gets put together

Next.js add to to all the efforts done to create a unique experience in the web. Next.js does not replace Single-Page app created by React! It adds to them by creating pre-rendered HTML.
