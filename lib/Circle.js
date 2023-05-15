const Shape = require("./Shapes");

class Circle extends Shape {
  render() {
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`;
  }
}

module.exports = Circle;
