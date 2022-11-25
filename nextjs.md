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

### Head

`<Head>` is a React Component that is built into Next.js. It allows you to modify the `<head>` of a page.

```jsx
import Head from 'next/head';

<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

### Link

```jsx
import Link from 'next/link';

<Link href="/products/cool-book">Cool book</Link>
```

In a production build of Next.js, whenever `Link` components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background.

**Note:** If we need to link to an external page outside the Next.js app, just use an `<a>` tag.

### Image

It's better not to use `<img />` tag, because you have to manually handle:

- Ensuring your image is responsive on different screen sizes
- Optimizing your images with a third-party tool or library
- Only loading images when they enter the viewport.

Instead, Next.js provides an `Image` component out of the box to handle this for you.
Images are lazy loaded by default. Images load as they are scrolled into viewport.

```jsx
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```

### Script

It is an extension of the HTML `<script>` element and optimizes when additional scripts are fetched and executed.
  
```jsx
import Script from 'next/script';

<Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
```

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

### Server-Side Rendering

To use SSR, we need to export `getServerSideProps` instead of `getStaticProps` from our page:

```jsx
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
```
Parameter `context` contains request specific parameters.

### Static Site Generation

When we export a page component, we can also export an async function called `getStaticProps`. If we do this, then:

- `getStaticProps` runs at build time in production, and…
- Inside the function, we can fetch external data and send it as `props` to the page.

```jsx
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
Note: In development mode, `getStaticProps` runs on each request instead.
