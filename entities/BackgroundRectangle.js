import { WINDOWHEIGHT } from "../assets/windowWidth.js";
import { Entity } from "./Entity.js";

export class FloatingRectangle extends Entity {
    constructor(x, y, length, width, color, speed) {
        super(x, y, length, width);
        this.color = color;
        this.speed = speed;
    }

    draw () {
        this.y += this.speed;
        if (this.y + this.width/2 < 0) {
            this.y = WINDOWHEIGHT + this.width/2;
        }

        fill(this.color)
        rect(this.x, this.y, this.length, this.width);
    }


}