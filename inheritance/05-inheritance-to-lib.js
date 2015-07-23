var Class = function (parent) {
  var klass = function () {
    this.init.apply(this, arguments);
  }
  klass.prototype.init = function () {};
  
  //Изменяем прототип объекта klass, чтобы он указывал на родительский объект,
  //свойства которого мы хотим унаследовать
  if (parent) {
    //Создаем новую функцию-конструктор
    var subclass = function() {};
    //Делаем ей прототип родительского объекта
    subclass.prototype = parent.prototype;
    //Экземпляр полученного объекта делаем прототипом для klass
    klass.prototype = new subclass;
  };
  
  //Методы include, extend...
  return klass;
}


var Animal = new Class;
Animal.prototype.move = function () {
  return 'Я двигаюсь...';
}

//Создаем класс Dog, имеющий родительский класс - Animal
var Dog = new Class(Animal);
Dog.prototype.wag = function () {
  return 'Я виляю хвостом...';
}

var sharik = new Dog;
//Экземпляры класса Dog наследуют свойства класса Animal
sharik.wag(); //Я двигаюсь...
sharik.move(); //Я виляю хвостом...
