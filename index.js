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
      return 
        this.sides.find(
          function(num , index) {
            console.log(num, index);
          }
        );
}
}
class  Square extends Polygon {

  get isValid() {
    let sideLength = this.sides[0];
    console.log(sideLength);
    return this.sides.find( num => num !== sideLength)? false: true;
  }

  get area() {
    return this.sides[0] * this.sides[0];
  }
}

let triangle = new Triangle([3, 3, 3]);
console.log(triangle.isValid);
