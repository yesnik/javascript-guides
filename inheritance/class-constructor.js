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
  return klass;
}

//Создадим класс Person
var Person = new Class;
//Определим, что будет происходить, когда создается экземпляр класса
Person.prototype.init = function(name) {
  console.log('Person instance created - ' + name);
}

var stranger = new Person(); //Person instance created - undefined
var joe = new Person('Joe'); //Person instance created - Joe
