const Shape = require("./Shapes");

class Square extends Shape {
  render() {
    return `<rect x="120" width="100" height="100" rx="15" fill=${this.color} />`;
  }
}

module.exports = Square;
