const geo = require('geo-libs');

let rec = geo.newRectangle(10, 20);

console.log(rec.calculateArea());

let kare = geo.newSquare(10);
console.log(kare.calculateArea());

let circle = geo.newCircle(10);
console.log(circle.calculateArea())
