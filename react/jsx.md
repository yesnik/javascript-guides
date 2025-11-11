# JSX

**JSX** is a syntax extension for JavaScript that allows us to describe UI in a familiar HTML-like syntax. 

Note that browsers don’t understand JSX out of the box, so you’ll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript.

## 3 Rules of JSX

### 1. Return a single root element 

Component can't return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper:

```jsx
function MyApp() {
  return (
    <>
      <h1>Hello, world!</h1>
      <MyInput name="student" placeholder="How are you?" />
    </>
  );
}
```
### 2. Close all tags

```js
const image = <img src="vite.svg" alt=""></img>
```

Everyone prefers to use the *self-closing tag syntax*:

```js
const image = <img src="vite.svg" alt="" />

<MyButton />
<br />
```

### 3. Use `camelCase` for most of the things

JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. 
But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.

This is why, in React, many HTML and SVG attributes are written in camelCase. 
For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead:

```js
<div className="card">...</div>
```

## `{}` to escape to JS

We can use curly braces `{}`, a special JSX syntax that allows us to write regular JavaScript directly inside JSX markup.

Curly braces let us "escape back" into JavaScript so that we can embed some variable:

```jsx
function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}
```

Use curly braces instead of quotes to "escape into JavaScript" from JSX attributes. We can pass not only `string`, but `bool`, `int`, etc.

```jsx
return (
  <div>
    <img
      className="user"
      src={user.imageUrl}
    />

    <User isActive={false} age={20} />
  </div>
);
```

## Conditional rendering

```jsx
export default function App() {
  let content;
  let authorized = true;
  if (authorized) {
    content = <Header title="Welcome" />;
  } else {
    content = <MyInput name="student" placeholder="How are you?" />;
  }
  return (content);
}
```

Ternary operator:

```jsx
export default function App() {
  let authorized = true;
  
  return authorized ? (
      <Header title="Welcome" />
    ) : (
      <MyInput name="student" placeholder="How are you?" />
    );
}
```

If we don't need the `else` branch, we can use a shorter `logical &&` syntax:

```jsx
authorized && (
  <Header title="Welcome" />
);
```

## Render lists

Use the `map()` function to transform an array of products into an array of `<li>` items:

```jsx
export function ProductList({ products }) {
  const items = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return <ul>{items}</ul>;
}
```

Use in the App:

```jsx
export default function App() {
  const products = [
    { id: 1, title: 'Book' },
    { id: 2, title: 'Pen' },
    { id: 3, title: 'Pencil' },
  ];

  return <ProductList products={products} />;
}
```

**Important:** `<li>` must have a `key` attribute. 
For each item in a list, we should pass a string or a number that uniquely identifies that item among its siblings.

## Respond to events

In React, event names are camelCased. The `onClick` event is one of many possible events we can use to respond to user interaction. 
For example, we can use `onChange` for input fields or `onSubmit` for forms.

```jsx
export default function MyButton() {
  function handleClick() {
    alert('Hello!');
  }

  return <button onClick={handleClick}>Hello</button>;
}
```

## Add state to component with `useState` hook

Component can "remember" some information and display it:

```jsx
import { useState } from 'react';

export default function MyButton() {
  const [votes, setVotes] = useState(0);
  
  function handleClick() {
    setVotes(votes + 1);
  }

  return <button onClick={handleClick}>Votes: {votes}</button>;
}
```
Functions starting with `use` are called *Hooks*. `useState` is a built-in Hook provided by React. 

We will get two things from `useState`: the current state (`votes`), and the function that lets you update it (`setVotes`). 
We can give them any names, but the *convention* is to call them like `[something, setSomething]`.

## Lift state up

We have 2 buttons. Click on each button should update the counter and display it's value on each button.

```jsx
export function MyButton({ counter, onClick }) {
  return <button onClick={onClick}>{'Counter: ' + counter}</button>;
}
```

App:

```jsx
export default function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <ProductList products={products} />
      <MyButton counter={counter} onClick={handleClick} />
      <br />
      <MyButton counter={counter} onClick={handleClick} />
    </div>
  );
}
```
