function Circle(r) {
  this.radius = r;

  this.draw = function () {
    console.log("draw");
  };
}

Circle.prototype.draw = function () {
  console.log("draw prototype");
};

Circle.prototype.move = function () {
  console.log("move prototype");
};

const x = new Circle(5);
x.move();
console.log(x);

/**
 * Own properties
 */
//returns instance/own var and method only
console.log(Object.keys(x)); // ["radius", "draw"] not move

console.log(x.hasOwnProperty("draw")); // true
console.log(x.hasOwnProperty("move")); // false

/**
 * Prototype properties
 */
//returns all menbers ( instance/own  + prototype)
for (let p in x) {
  console.log(p); // return radius, move and draw
}
