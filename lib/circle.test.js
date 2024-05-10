const Circle = require('./circle'); // Assuming circle.js is in the same directory

describe('Circle class', () => {
  test('creates a circle with default radius', () => {
    const color = 'blue';
    const circle = new Circle(color);

    expect(circle.radius).toBe(80); // Assuming default radius is 50 (adjust based on your code)
  });

  test('renders SVG with circle element using default radius', () => {
    const color = 'purple';
    const circle = new Circle(color);

    const svgString = circle.render();
    expect(svgString).toContain(`<circle cx="150" cy="100" r="80"`); // Adjust expected radius value
  });
});
