//Пример 1.1. Обращение к исходному объекту через вспомогательную переменную self
var App = {
  name: 'Johny',
  titleClicked: function () {
    console.log(this);
    console.log('this.name: ' + this.name);
  },
  init: function () {
    var self = this;
    //Передаем в click() функцию-обработчик напрямую
    $('#page_title').click(self.titleClicked);
  }
};

App.init();
//При клике на элемент:
// this:  <h2 id="page_title">
// this.name: undefined


//Пример 1.2. Обращение к исходному объекту по его имени - App
var App = {
  name: 'Johny',
  titleClicked: function () {
    console.log(this);
    console.log('this.name: ' + this.name);
  },
  init: function () {
    $('#page_title').click(function() {
      console.log(this); //выведет эл-нт, по которому кликнули: <h2 id="page_title">
      //Обращамся к объекту по его имени
      App.titleClicked();
    });
  }
};

App.init();
//При клике на элемент:
//this:  Object { name="Johny",  titleClicked=function(),  init=function()}
//this.name: Johny


//Пример 2. 
var App = {
  name: 'Johny',
  titleClicked: function () {
    console.log(this);
    console.log('this.name: ' + this.name);
  },
  init: function () {
    var self = this;
    //Передаем в click() анонимную функцию, в которой вызываем функцию-обработчик
    $('#page_title').click(function () {
      self.titleClicked();
    });
  }
};

App.init();
//При клике на элемент:
//this: Object { name="Johny",  titleClicked=function(),  init=function()}
//this.name: Johny
