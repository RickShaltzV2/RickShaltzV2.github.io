import { Button } from "./Button.js";

export class GraphButton extends Button {
    constructor (x, y, length, width, parent, data, i) {
        super(null, "rectangle", "white", length, width)

        this.x = x + 150 + parent.x;
        this.y = y;
        this.length = length
        this.width = width

        if (data != null) {
            this.region = data[i].region
            this.value = data[i].value
        } else {
            this.region = null
            this.value = null
        }
        this.parent = parent
    }

    draw(x_offset, y_offset) {
        fill ("rgba(0, 0, 0, 0)");
        // fill(0)

        if (this.contains(mouseX, mouseY)) {
            strokeWeight(5)
        }

        rect(this.x, this.y, this.length, this.width);
        strokeWeight (0)
    }

    trigger_clicked() {
        this.parent.set_region_focus(this.region, this.value)
    }

}