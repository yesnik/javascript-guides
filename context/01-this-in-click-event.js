//Пример 1.1. Передаем функцию-обработчик напрямую
var App = {
  name: 'Johny',
  titleClicked: function () {
    console.log(this);
    console.log('this.name: ' + this.name);
  },
  init: function () {
    //Передаем в click() функцию-обработчик напрямую
    $('#page_title').click(this.titleClicked);
  }
};

App.init();
//При клике на элемент:
// this:  <h2 id="page_title">
// this.name: undefined, т.к. ф-ция self.titleClicked вызвана в контексте элемента h2.


//Пример 1.2. Используем bind(), чтобы указать контекст, в котором будет вызываться функция-обработчик
var App = {
  name: 'Johny',
  titleClicked: function () {
    console.log(this);
    console.log('this.name: ' + this.name);
  },
  init: function () {
    $('#page_title').click(this.titleClicked.bind(this));
  }
};

App.init();
//При клике на элемент:
//this:  Object { name="Johny",  titleClicked=function(),  init=function()}
//this.name: Johny


//Пример 2.1. Вызов функции-обработчика внутри анонимной функции.
//            Используем self, чтобы получить доступ к исходному объекту App
var App = {
  name: 'Johny',
  titleClicked: function () {
    console.log(this);
    console.log('this.name: ' + this.name);
  },
  init: function () {
    //Используем промежуточную переменную, чтобы сохранить ссылку на сам объект App
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


//Пример 2.2. Вызов функции-обработчика внутри анонимной функции. 
//            Обращение к исходному объекту по его имени - App
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
