console.log("starting");
const { Shape } = require('./lib/shapes.js'); 
const Triangle = require('./lib/triangle.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js'); 
const FileWriter = require('./lib/fileWriter.js');
const inquirer = require('inquirer'); // Install inquirer for prompts

const MAX_TEXT_LENGTH = 3;

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for your logo (up to 3 characters):',
      default: 'SVG', // default value for text
      validate: (input) => (input.length <= MAX_TEXT_LENGTH ? true : 'Text must be 3 characters or less'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter color for the text (keyword or hex code):',
      default: 'white',
      validate: (input) => isValidColor(input),
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['Circle', 'Triangle', 'Square'],
      default: 'Circle', //default shape choice
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter color for the shape (keyword or hex code):',
      default: 'green',
      validate: (input) => isValidColor(input),
    }
  ]);

  let sideLength = 400
  const { text, textColor, shape, shapeColor } = answers;
  const chosenShape = createShape(shape, sideLength, shapeColor, answers); // Pass sideLength
  console.log(chosenShape);
  const logoSVG = chosenShape.render(textColor);
  const writer = new FileWriter(`./examples/${shape}.svg`); // Create instance with filename
  await writer.write(logoSVG); // Use write method
}
console.log("Main complete");
function createShape(shape, sideLength, shapeColor, answers) { // Add answers parameter
  switch (shape) {
    case 'Circle':
      const circle = new Circle(shapeColor, sideLength);
      circle.text = answers.text; // Set text property on the circle object
      circle.textColor = answers.textColor; // Set text color property on the circle object
      return circle;
    case 'Triangle':
      const triangle = new Triangle(shapeColor, sideLength);
      triangle.text = answers.text; // Set text property on the triangle object
      triangle.textColor = answers.textColor; // Set text color property on the triangle object
      return triangle;
    case 'Square':
      const square = new Square(shapeColor, sideLength);
      square.text = answers.text; // Set text property on the square object
      square.textColor = answers.textColor; // Set text color property on the square object
      return square;
    default:
      throw new Error('Invalid shape');
  }
}
console.log("Shape complete");
function isValidColor(color) {
  const hexRegex = /^#[0-9a-f]{3}$|^#[0-9a-f]{6}$/i; // Regex for hex codes (3 or 6 digits)
  const keywordRegex = /^(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|purple|red|silver|teal|white|yellow)$/i; // Common color keywords (case-insensitive)

  // Check if it's a valid hex code
  if (hexRegex.test(color)) {
    return true;
  }

  // Check if it's a valid keyword
  return keywordRegex.test(color);
}
 main();