const { Rectangle } = require('./rectangle.js');
const { Square } = require('./square.js');
const { Circle }= require('./circle.js');

let Geo = {
    newRectangle : (width, height) => new Rectangle(height, width),
    newSquare : width => new Square(width),
    newCircle : diameter => new Circle(diameter)
}

module.exports = Geo;
