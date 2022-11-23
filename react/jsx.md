# JSX

## Return only single element

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

## `{}` to escape to JS

Curly braces let you "escape back" into JavaScript so that you can embed some variable:

```jsx
function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}
```

Use curly braces instead of quotes to "escape into JavaScript" from JSX attributes:

```jsx
return (
  <img
    className="user"
    src={user.imageUrl}
  />
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
export default function App() {
  const products = [
    { title: 'Book', id: 1 },
    { title: 'Pen', id: 2 },
    { title: 'Eraser', id: 3 },
  ];
  
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}
```
**Important:** `<li>` must have a `key` attribute. 
For each item in a list, we should pass a string or a number that uniquely identifies that item among its siblings.

## Respond to events

```jsx
export default function MyButton() {
  function handleClick() {
    alert('Hello!');
  }

  return <button onClick={handleClick}>Hello</button>;
}
```

## Add state to component

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
You will get two things from `useState`: the current state (`votes`), and the function that lets you update it (`setVotes`). 
You can give them any names, but the *convention* is to call them like `[something, setSomething]`.
