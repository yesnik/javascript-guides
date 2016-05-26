/*
* Public and private functions, properties in javascript
*/
function Car(model) {
    'use strict';
    // Public property
    this.model = model;
    // Public object function
    this.getType = function (secret) {
        secret = (typeof(secret) === 'undefined') ? false : true;
        return secret ? getSecretType() : type;
    };
    
    // Private property
    var type = 'car';
  
    // Private function
    function getSecretType () {
        return 'President ' + type;
    }
}

var bmw = new Car('BMW');

// We can access public properties
console.log(bmw.model); // "BMW"

// We can't access private properties
console.log(bmw.type); // undefined

// We can call public functions
bmw.getType(); // "car"
bmw.getType(true); //"President car"

// We can't call private functions
bmw.getSecretType(); // TypeError: bmw.getSecretType is not a function
