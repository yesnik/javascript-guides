# Classes

## Attrs and methods

```js
class Robot {
  type = 'T100'
  
  getType = () => {
    return this.type
  }
}
const terminator = new Robot()
console.log(terminator.getType()) // "T100"
```

## Constructor

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

## Inheritance

```js
class Animal {
  constructor() {
    this.title = 'Animal'
  }
  getTitle = () => {
    return this.title
  }
}

class Cat extends Animal {
  constructor() {
    super() // We need to use this in the child class
    
    this.type = 'Cat'
  }
  getType = () => {
    return this.type
  }
}

const tom = new Cat();
console.log(tom.getTitle()) // 'Animal'
console.log(tom.getType()) // 'Cat'
```
