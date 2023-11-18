import { TextLabelBox } from "../TextLabelBox.js";

export class Button extends TextLabelBox {
    constructor (textLabel, shape, color, length, width) {
        super(textLabel, shape, color, length, width)
        
        this.x_offset = 0;
        this.y_offset = 0;
    }

    draw (x_offset, y_offset) {
        if (x_offset != null) {
            this.x_offset = x_offset
            this.y_offset = y_offset
        }

        super.draw(this.contains(mouseX, mouseY), x_offset, y_offset)
    }

    clicked (x, y) {
        if (this.contains(x, y)) {
            this.trigger_clicked();
        }
    }

    trigger_clicked() {
        // Abstract, to be implemented in children
    }

    contains(x, y){
        var left = this.x - this.length/2 + this.x_offset
        var right = this.x + this.length/2 + this.x_offset
        var top = this.y - this.width/2 + this.y_offset
        var bot = this.y + this.width/2 + this.y_offset


        if (x >  left && x < right && y > top && y < bot){
            return true
        }
        return false
    }
}
