export class Entity {
    constructor(x, y, length, width) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
    }

    draw () {
        // Abstract
    }
}