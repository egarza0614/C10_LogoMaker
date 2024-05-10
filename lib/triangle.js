const Shape = require('./shapes.js');

class Triangle extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
    this.text = "";
    this.textColor = "";
  }

  render() {
    const textAnchor = "middle";
    const header = `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">`;

    const centerX = this.sideLength / 2;
    const centerY = this.sideLength * Math.sqrt(3) / 4; // Height of equilateral triangle
    const topY = 0; // Assuming equilateral triangle with top point at (centerX, 0)

    // Calculate triangle points using center coordinates and side length
    const point1 = `${centerX},${topY}`;
    const point2 = `${centerX - this.sideLength / 2},${centerY}`;
    const point3 = `${centerX + this.sideLength / 2},${centerY}`;

    // Define text position based on triangle shape (adjust as needed)
    const textX = centerX;
    const textY = centerY / 2; // Place text in the middle of the triangle

    return header +
      `<polygon points="${point1}, ${point2}, ${point3}" fill="${this.color}" />` +
      `<text x="${textX}" y="${textY}" text-anchor="${textAnchor}" font-size="60" fill="${this.textColor}">${this.text}</text>` +
      `</svg>`;
    }
  }
  module.exports = Triangle;
