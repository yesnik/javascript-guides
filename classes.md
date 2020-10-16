# Classes

```js
class Cat {
  constructor(name) {
    this.name = name
  }
  getTitle = () => {
    return `Cat ${this.name}`
  }
}

tom = new Cat('Tom')
tom.name // 'Tom'
tom.getTitle() // 'Cat Tom'
```
