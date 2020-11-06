# CSS Modules

Create React App supports [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet) right out of the box since version 2.

You just have to create a file with the extension `.module.css`

For example, file `App.module.css`:

```css
.Button {
  padding: 10px;
}
```

Now we can use styles at `App.js`:

```jsx
import styles from './App.module.css';

<button className={styles.Button}>Send</button>
```
