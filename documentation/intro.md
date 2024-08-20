# What is NextJS

A Single Page React based framework that runs on the server. It creates pre-rendered React Websites. It creates this pre-rendered React websites using:

-   Server Side Rendering
-   Static Site Generation

## What does pre-rendered React websites mean?

Nextjs generates **correct** HTML that is ready for the user to see.

nextjs = server-side rendering + React Single Page App Website.

## What is Server Side Rendering?

When React components are rendered into HTML pages on the server **after a page request comes from the browser**

The server renders the component, then sends it to the browser. (This happens on each page request from the browser)

## What is Static Site Generation?

When React components are rendered into HTML pages **at build time** so that we can just deploy the webpages and JavaScript bundles into the web!

## The Flow of NextJs

Our **React Components are already rendered into HTML by the time it hits the browser**! Once it reaches the browser it can behave like a Single Page Application

## React Without NextJs

React renders components in the browser. This is client - side rendering

## Benefits of NextJs

-   **Improves Performance** Static Site Generation and Server Side Rendering pre-rendered the app, meaning less work for the browser.

-   **Better SEO** Since Websites are pre-rendered and a correct HTML is created with all the data this means that web-crawlers and search engines will find relevant content in your website faster.
