# Typescript

## Types

```ts
let nickname:string = "Kenny"
let age:age = 18
let a:boolean = true

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

## Functions

```ts
// Way 1
function hey(name: string, age: number): string {
    return "Hello, " + name + '! Your age is ' + age;
}

// Way 2
const hey = function (name: string, age: number): string {
    return "Hello, " + name + '! Your age is ' + age;
}

// Way 3. Arrow functions
const hey = (name: string, age: number): string => {
    return "Hello, " + name + '! Your age is ' + age;
}

// Way 4. Arrow functions, short version
const hey = (name: string, age: number): string => "Hello, " + name + '! Your age is ' + age

hey('Kenny', 19) // "Hello, Kenny! Your age is 19"
```

## Objects

```ts
const obj = {
    title: "Kenny",
    'is great': true
}
obj.title = "Lenny"
obj['is great'] = false

console.log(obj)
/* {
  "title": "Kenny",
  "some field": true
} */
```

## Classes

```ts
class Color {
    private _name: string
    private _code: string

    constructor(name: string, code: string) {
        this._code = code
        this._name = name
    }

    getName(): string {
        return this._name
    }

    getCode(): string {
        return this._code
    }
}

const red = new Color("red", "FF0000")
console.log( red.getName() ) // 'red'
```

### Abstract class

```ts
abstract class Animal {
    private _name: string

    constructor(name: string) {
        this._name = name
    }

    getName(): string {
        return this._name;
    }

    abstract say(): string;
}

class Cat extends Animal {
    say(): string {
        return 'Meow'
    }
}

const tom = new Cat("Tom")
console.log(tom.getName()) // "Tom" 
console.log(tom.say()) // "Meow" 
console.log(tom._name) // "Tom" (!!!)
```

### Interface

```ts
interface Animal {
    getName(): string;
    say(): string
}

class Cat implements Animal {
    private _name:string;

    constructor(name: string) {
        this._name = name
    }

    getName(): string {
        return this._name
    }

    say(): string {
        return 'Meow'
    }
}

const tom = new Cat("Tom")
console.log(tom.getName()) // "Tom" 
console.log(tom.say()) // "Meow"

function getAnimalInfo(animal: Animal) {
    return animal.getName() + ": " + animal.say() 
}

console.log(getAnimalInfo(tom)) // "Tom: Meow" 

// Duck Typing
console.log(getAnimalInfo({
    getName: () => 'Leo',
    say: () => 'Hello'
})) // "Leo: Hello" 
```
