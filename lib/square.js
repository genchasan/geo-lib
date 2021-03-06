const { Rectangle } = require('./rectangle.js');

class Square extends Rectangle {
    constructor(width=0) {
        if (!Number.isInteger(width))
            throw new Error("Lütfen sadece sayısal değer girin")
        super(width, width);
    }
}

module.exports = { Square };
