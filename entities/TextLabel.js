import { Entity } from "./Entity.js";

export class TextLabel extends Entity {
    constructor(x, y, text, text_size, font, color) {
        super(x, y, 0, 0);
        this.text = text;
        this.text_size = text_size;
        this.font = font;
        this.color = color;
    }

    draw (x_offset, y_offset) {
        if (x_offset == null) {
            x_offset = 0
            y_offset = 0
        }

        var x = this.x + x_offset;
        var y = this.y + y_offset;

        fill (this.color);
        textFont(this.font);
        textSize(this.text_size);
        text(this.text, x, y);
    }

    set_pos(x, y) {
        this.x = x;
        this.y = y;
    }


}