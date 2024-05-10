const Shape = require('./shapes.js');

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
    this.text = "";
    this.textColor = "";
  }

  render() {
    const textAnchor = "middle";
    const header = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;
   
    const centerX = this.sideLength / 2;
    const centerY = this.sideLength / 2;

    // Calculate corner points of the square based on center and side length
    const topLeftX = centerX - this.sideLength / 2;
    const topLeftY = centerY - this.sideLength / 2;
    const topRightX = topLeftX + this.sideLength;
    const topRightY = topLeftY;
    const bottomRightX = topRightX;
    const bottomRightY = topLeftY + this.sideLength;
    const bottomLeftX = topLeftX;
    const bottomLeftY = bottomRightY;

    // Define text position based on square shape (adjust as needed)
    const textX = centerX;
    const textY = centerY; // Place text in the center of the square

    return header +
      `<rect x="${topLeftX}" y="${topLeftY}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />` +
      `<text x="${centerX}" y="${centerY}" text-anchor="${textAnchor}" font-size="40" fill="${this.textColor}">${this.text}</text>` +
      `</svg>`;
    }
  }
  module.exports = Square;
