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

//Метод save нельзя вызвать через класс Person
Person.save(4); //TypeError: Person.save is not a function

//Метод save можно вызвать через экземпляр класса Person
var leo = new Person('Leo');
leo.save(7); //Saving item #7
