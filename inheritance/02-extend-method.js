var Class = function () {
  var klass = function () {
    this.init.apply(this, arguments);
  }
  klass.prototype.init = function(){};
  
  //Добавление свойств класса
  klass.extend = function (obj) {
    //Перебираем все св-ва obj и копируем их в класс
    for (var prop in obj) {
      klass[prop] = obj[prop];
    }
  }
  return klass;
}

//Создадим класс Person
var Person = new Class;
//Добавим метод, чтобы он был доступен прямо из класса
Person.extend({
  find: function (id) {
    console.log('Finding Person #' + id);
  }
});

//Метод find доступен из класса
var person = Person.find(11); //Finding Person #11

//Метод find НЕ доступен из экземпляра класса
var jenny = new Person('Jenny');
jenny.find(5); //TypeError: jenny.find is not a function
