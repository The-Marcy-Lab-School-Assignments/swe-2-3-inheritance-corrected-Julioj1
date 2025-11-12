/* eslint-disable max-classes-per-file */

class Shape {
  constructor(type) {
    this.type = type;
  }
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle")
    this.radius = radius;
  }
  getArea() {
    return Math.PI * (this.radius ** 2)
  }
}

class Rectangle {

}

class Square {

}

module.exports = {
  Shape,
  Circle,
  Rectangle,
  Square,
};
