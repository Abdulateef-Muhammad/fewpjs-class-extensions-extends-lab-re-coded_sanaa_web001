// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side);
  }
}

class Triangle extends Polygon {
  
  get isValid() {
    return this.sides.find( function(num, i) {
      let length = this.sides.length;
      return num + this.sides[ length - 2 ] > this.sides[length - 1]
    }.bind(this));
  }
}

class  Square extends Polygon {

  get isValid() {
    let sideLength = this.sides[0];
    return this.sides.find( side => side === sideLength);
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}
