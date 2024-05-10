const Shape = require('./shapes.js');

class Circle extends Shape {
  constructor(color) {
    super(color);
    this.radius = 80;
    this.text = "";
    this.textColor = "";
  }

  render() {
    const textAnchor = "middle";
    const header = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    console.log("Circle radius:", this.radius);
    return header +
      `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />` +
      `<text x="150" y="125" text-anchor="${textAnchor}" font-size="60" fill="${this.textColor}">${this.text}</text>` +
      `</svg>`;
  }
}

module.exports = Circle;
