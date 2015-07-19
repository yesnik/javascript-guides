var Class = function () {
  var klass = function () {
    this.init.apply(this, arguments);
  }
  klass.prototype.init = function(){};
  
  //Метод для добавления свойств к экземпляру класса
  klass.include = function (obj) {
    //Перебираем все свойства переданного obj и добавляем их к прототипу класса
    for (var prop in obj) {
      klass.prototype[prop] = obj[prop];
    }
  }
  return klass;
}

//Создадим класс Person
var Person = new Class;
Person.include({
  save: function (id) {
    console.log('Saving item #' + id);
  }
});

//Метод save НЕ доступен из класса
Person.save(4); //TypeError: Person.save is not a function

//Метод save доступен из экземпляра класса
var leo = new Person('Leo');
leo.save(7); //Saving item #7

//Удобно выделить реализацию метода save в отдельный модуль,
//который можно будет подключать к классам
var ORMModule = {
  save: function (id) {
    console.log('Saving item #' + id);
  }
}

var Car = new Class;
var Bike = new Class;

//Добавляем к обоим классам методы объекта ORMModule
//Все экземпляры этих классов будут метод save()
Car.include(ORMModule);
Bike.include(ORMModule);

var bmw = new Car;
bmw.save(5); //Saving item #5

var merida = new Bike;
merida.save(8); //Saving item #5
