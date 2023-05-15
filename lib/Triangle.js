const Shape = require("./Shapes");

class Triangle extends Shape {
  render() {
    return `<polygon points="200,10 250,190 160,210" fill=${this.color} />`;
  }
}

module.exports = Triangle;
