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

The `constructor` method is a special method that's called when a new instance of the class (object) is created.

The `new` keyword calls the constructor method and creates a new instance of the class.

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

## Private properties

We can make a property [private](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements) by prefixing it with a hash `#` and declaring it at the top of the class:

```js
class Movie {
  #title;
  constructor(title, rating) {
    this.#title = title;
    this.rating = rating;
  }
}

const matrixMovie = new Movie("The Matrix", 9.5);
console.log(matrixMovie.#title); // SyntaxError: Private field '#title' must be declared in an enclosing class
```

**Note:** Code run in the Chrome console can access private elements outside the class. 
This is a DevTools-only relaxation of the JavaScript syntax restriction.

Private properties can still be used from within the class:

```js
class Movie {
  #title;
  constructor(title, rating) {
    this.#title = title;
    this.rating = rating;
  }

  getTitleAllCaps() {
    const allCaps = this.#title.toUpperCase();
    return allCaps;
  }
}

const matrixMovie = new Movie("The Matrix", 9.5);
console.log(matrixMovie.getTitleAllCaps());
// THE MATRIX
```

Encapsulation in JavaScript is typically enforced at two levels:

- The class level: Public/private methods using `#` for private fields
- The module level: Exporting only what you want to be public

## Static Methods

A [static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) method or property is bound to the class itself, not the instance of the class (an object). 

```js
class Cat {
  static catsAmount = 0;

  constructor(name) {
    this.name = name;
    Cat.catsAmount += 1;
  }

  static getCatsAmount() {
    return Cat.catsAmount;
  }
}

const tom = new Cat("Tom");
console.log(Cat.getCatsAmount()); // 1

const don = new Cat("Don");
console.log(Cat.getCatsAmount()); // 2

// This doesn't work because its not a method on the object
console.log(tom.getCatsAmount()); // TypeError: tom.getCatsAmount is not a function
```
