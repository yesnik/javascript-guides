#Паттерн подписка/публикация

В javascript паттерн ```pub/sub (publish/subscribe)``` можно реализовать с помощью следующего объекта.

```javascript
var PubSub = {
  subscribe: function(ev, callback) {
    //Создаем объект callbacks, если его нет
    if (typeof this.callbacks === 'undefined') {
      this.callbacks = {};
    }
    
    // Для переданного ключа события (ev) создаем массив 
    // и вставляем колбэк в этот массив
    (this.callbacks[ev] || (this.callbacks[ev] = [])).push(callback);
    return this;
  },
  publish: function() {
    var args, ev, list, calls, i, len;
    // Преобразуем arguments в массив
    args = Array.prototype.slice.call(arguments, 0);
    
    // Извлекаем первый аргумент (имя события)
    ev = args.shift();
    
    // Выходим из функции, если нет объекта callbacks или
    // если для события ev нет колбэка
    if (!(calls = this.callbacks)) return this;
    if (!(list = this.callbacks[ev])) return this;
    
    // Вызываем колбэки
    for (i = 0, len = list.length; i < len; i += 1) {
      list[i].apply(this, args);
    }
    return this;
  }
};

//Подписываемся на событие
PubSub.subscribe('user:registered', function (name) {
  console.log('Welcome, ' + name);
});

//Публикуем событие. Подписчики на него реагируют
PubSub.publish('user:registered', 'Kenny') //Welcome, Kenny
```
