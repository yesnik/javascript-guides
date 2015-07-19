var Class = function () {
  //Создаем ф-цию, в которой будем запускать метод
  //init с аргументами, переданными в Class(args)
  //Используем 'klass', т.к. слово 'class' уже зарезервировано в js.
  var klass = function () {
    this.init.apply(this, arguments);
  }
  //Определяем, что init, иначе - ошибка, если
  //юзер не определит этот метод в своем классе
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
