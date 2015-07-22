var Robot = function () {};
Robot.prototype.move = function () { 
  console.log('Я двигаюсь...'); 
};

//Robot.move(); //TypeError: Robot.move is not a function
var robot = new Robot;
robot.move(); //Я двигаюсь...

var Robocop = function () {};
// Robocop наследует свойства класса Robot
// Т.е. мы говорим, что прототип класса Robocop - объект класса Robot
Robocop.prototype = new Robot;

Robocop.prototype.shoot = function () {
  console.log('Я стреляю!');
};

//Robocop.shoot(); //TypeError: Robocop.shoot is not a function
//Robocop.move(); //TypeError: Robocop.move is not a function
var robocop = new Robocop();
robocop.shoot(); //Я стреляю!
robocop.move(); //Я двигаюсь...
