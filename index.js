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
    validate: (text) => text.length <= 3 || "Text has to be 3 letters long",
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
      const textSvg = createTextSvg(inputs.text, inputs.text_color);
      // console.log(textSvg);
      // console.log(createSvg(circle));
      renderSvg(createSvg(circle, textSvg));
    }

    if (inputs.shape_of_logo === "Square") {
      const square = new Square(inputs.shape_color);
      createSvg(square);
      const textSvg = createTextSvg(inputs.text, inputs.text_color);
      console.log(createSvg(square));
      renderSvg(createSvg(square, textSvg));
    }

    if (inputs.shape_of_logo === "Triangle") {
      const triangle = new Triangle(inputs.shape_color);
      createSvg(triangle);
      const textSvg = createTextSvg(inputs.text, inputs.text_color);
      renderSvg(createSvg(triangle, textSvg));
    }
  });
}

function createSvg(shape, text) {
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()} 
  ${text}
  </svg>`;
}

function createTextSvg(text, text_color) {
  return `<text x="116" y="115" font-size="55" fill="${text_color}">
  ${text}
  </text>`;
}

function renderSvg(shapeSvg) {
  fs.writeFileSync("./test2.svg", shapeSvg);
}
svg();
