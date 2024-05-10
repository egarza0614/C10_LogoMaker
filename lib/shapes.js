  class Shape {
    constructor(color) {
      this.color = color;
      this.text = ""; // Add text property
      this.textColor = ""; // Add text color property
    }
  
    setColor(color) {
      this.color = color;
    }
    setColor(textColor) {
      this.textColor = textColor;
    }
    // Abstract method to be implemented in child classes
    render() {
      throw new Error('render method not implemented in child class');
    }
  }
    
  module.exports = Shape;
  