function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}
/**
 * ===============================================================
 */
Circle.prototype = Object.create(Shape.prototype);
//above line reset the constructor of circle
//therefore we can no longer create
//new Circle.prototype.constructor(1)

//therefore need to reset the constructor
Circle.prototype.constructor = Circle;
//now we can create
// new Circle.prototype.constructor(1)
/**
 * ================================================================
 */

Circle.prototype.area = function () {
  console.log("draw");
};
