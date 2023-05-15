const inquirer = require("inquirer");

const fs = require("fs");

const Circle = require("./lib/Circle");

const Square = require("./lib/Square");

const Triangle = require("./lib/Triangle");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text for LOGO",
  },
  {
    type: "input",
    name: "text_color",
    message: "Pick text color",
  },
  {
    type: "list",
    name: "shape_of_logo",
    message: "Choose a shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shape_color",
    message: "Pick shape color",
  },
];

function svg() {
  return inquirer.prompt(questions).then((inputs) => {
    console.log(inputs);
    if (inputs.shape_of_logo === "Circle") {
      const circle = new Circle(inputs.shape_color);
      createSvg(circle);
      console.log(createSvg(circle));
      renderSvg(createSvg(circle));
    }

    if (inputs.shape_of_logo === "Square") {
      const square = new Square(inputs.shape_color);
      createSvg(square);
      renderSvg(createSvg(square));
    }

    if (inputs.shape_of_logo === "Triangle") {
      const triangle = new Triangle(inputs.shape_color);
      createSvg(triangle);
      renderSvg(createSvg(triangle));
    }
  });
}

function createSvg(shape) {
  return `<svg width="100" height="100"> 
  ${shape.render()}
  </svg>`;
}

function renderSvg(shapeSvg) {
  fs.writeFileSync("./test.svg", shapeSvg);
}
svg();
