# Access Component Methods And State From Outside React

See article: https://brettdewoody.com/accessing-component-methods-and-state-from-outside-react/

We can expose any component of our React app:

```js
// Inner component
<ChildComponent ref={(childComponent) => {window.childComponent = childComponent}} />

// Main component
ReactDOM.render(<Page ref={(ourComponent) => {window.ourComponent = ourComponent}} />, document.getElementById("app"));
```

After that we can access their methods:

```js
window.childComponent.hello(55);
alert(window.ourComponent.returnCounter());
```

## HTML

```html
<div id="app"></div>

<button id="parentButton">Get Parent State</button>
<button id="childButton">Get Child State</button>
```

## JS

```js
class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
    
  hello = (x) => {
    this.setState({
      counter: x
    })
  }

  returnCounter = () => {
    return this.state.counter;
  }
  
  increment = (event) => {
    event.stopPropagation();
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }
  
  render() {
    return (
      <div onClick={this.increment}>
        Child Value - {this.state.counter} - Click to increment
      </div>
    )
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }


  returnCounter = () => {
    return this.state.counter;
  }
  
  increment = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    return (
      <div onClick={this.increment}>
        <div>Parent Value - {this.state.counter} - Click to increment</div>
        <ChildComponent ref={(childComponent) => {window.childComponent = childComponent}}/>
      </div>
    )
  }
}

ReactDOM.render(<Page ref={(ourComponent) => {window.ourComponent = ourComponent}} />, document.getElementById("app"));

const parentBtn = document.getElementById("parentButton");
parentBtn.addEventListener("click", event => {
  alert(window.ourComponent.returnCounter());
});

const childBtn = document.getElementById("childButton");
childBtn.addEventListener("click", event => {
  window.childComponent.hello(55);
  alert(window.childComponent.returnCounter());
});
```
