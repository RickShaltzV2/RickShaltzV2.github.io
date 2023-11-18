import { Entity } from "./Entity.js";

export class TextLabelBox extends Entity {
    constructor(textLabel, shape, color, length, width) {
        super(textLabel.x, textLabel.y, length, width)
        this.shape = shape;
        this.color = color;
        this.textLabel = textLabel;


        if (length == null) {
            textSize (textLabel.text_size);
            this.length = textWidth(textLabel.text) + 50
            this.width = textAscent(textLabel.text) + 50
        }
    }

    draw (highlighted, x_offset, y_offset) {
        if (x_offset == null) {
            x_offset = 0
            y_offset = 0
        }

        var x = this.x + x_offset;
        var y = this.y + y_offset;

        if (highlighted == true) {
            var outline_thickness = 5
        } else {
            var outline_thickness = 1
        }

        fill(this.color);
        strokeWeight(outline_thickness);

        if (this.shape == "rectangle") {
            rect(x, y, this.length, this.width)
        } else if (this.shape == "rectangloid") {
            rect(x, y, this.length, this.width, 10, 10)
        }

        strokeWeight(0);

        this.textLabel.draw(x_offset, y_offset)
    }

    set_pos(x, y) {
        this.x = x;
        this.y = y;

        this.textLabel.set_pos(x, y)
    }
}