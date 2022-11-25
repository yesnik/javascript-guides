# Next.js

[Next.js](https://nextjs.org/) is a React Framework that gives you the best developer experience 
with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.

## Console commands

- Create app:
  ```bash
  npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
  ```
- Run dev server:
  ```bash
  npm run dev
  ```

## Pages

**Page** is a React Component exported from a file in the `pages` directory.

Pages are associated with a route based on their *file name*:

- `pages/index.js` is associated with the `/` route.
- `pages/products/cool-book.js` is associated with the `/products/cool-book` route.

Contents of `pages/products/cool-book.js`:

```jsx
export default function CoolBook() {
  return <h1>Cool book</h1>
}
```
The component can have any name, but you must export it as a `default` export.

## Components

### Link

```jsx
import Link from 'next/link';

<Link href="/products/cool-book">Cool book</Link>
```

In a production build of Next.js, whenever `Link` components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.

**Note:** If we need to link to an external page outside the Next.js app, just use an `<a>` tag.

## Rendering

**Rendering** is a process of converting the code we write in React into the HTML representation of our UI. It can happen either ahead of time at build time, or on every request at runtime.

With Next.js, 3 types of *rendering methods* are available: 

- **Server-Side Rendering** (SSR)
  - The HTML of the page is generated on a server *for each request*. 
  - The generated HTML, JSON data, and JavaScript instructions to make the page interactive are then sent to the client.
  - *Hydration* starts: React uses the JSON data and JavaScript instructions to make components interactive (attach event handlers to a button).
- **Static Site Generation** (SSG)
  - Content is generated once, at build time, when the application is deployed, and the HTML is stored in a CDN and re-used for each request.
- **Client-Side Rendering** (CSR). The browser receives an empty HTML from the server along with the JavaScript instructions to construct the UI.

SSR, SSG are also referred to as **Pre-Rendering** because the fetching of external data and 
transformation of React components into HTML happens *before* the result is sent to the client.
Pre-rendering means the HTML is generated in advance, on a server, instead of having it all done by JavaScript on the user's device.

We can choose the most appropriate rendering method for our use case on a page-by-page basis.
