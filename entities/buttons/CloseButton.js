import { Button } from "./Button.js";

export class CloseButton extends Button {
    constructor (textLabel, shape, color, length, width, parent) {
        super(textLabel, shape, color, length, width)

        this.parent = parent
    }

    trigger_clicked() {
        this.parent.close()
    }

}