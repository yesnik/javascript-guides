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
  
  //Метод для добавления свойств к экземпляру класса
  klass.include = function (obj) {
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

//Нельзя вызвать метод save через класс Person
Person.save(4); //TypeError: Person.save is not a function

//Можно метод save вызвать через экземпляр класса Person
var leo = new Person('Leo');
leo.save(7); //Saving item #7
