//Пример. Эмулируем приватные методы в javascript
var Bird = function () {};

//Заключаем определения приватных методов в IIFE 
//(Immediately Invoked Function Expression)
(function () {
  //Определяем приватный метод, недоступный извне
  var findById = function (id) {
    console.log('Finding by id = ' + id)
  };
  
  //Используем приватный метод в теле метода find()
  Bird.find = function (id) {
    return findById(id);
  };
})();

Bird.find(123) //Finding by id = 123
