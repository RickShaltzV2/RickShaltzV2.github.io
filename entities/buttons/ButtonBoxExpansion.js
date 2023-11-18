import { Button } from "./Button.js";

export class ButtonBoxExpansion extends Button {
    constructor (textLabel, shape, color, length, width, expanded_box, preview_image) {
        super(textLabel, shape, color, length, width)
        
        this.expanded_box = expanded_box;

        this.expanded_box.set_parent(this)

        if (preview_image != null){
            this.preview_image = loadImage(preview_image);
        
        }
    }

    draw() {
        if (this.preview_image != null && this.contains(mouseX, mouseY)){
            this.preview_image.resize(0, windowHeight/3)
            fill ("black")
            rect(windowWidth/2, windowHeight/2, this.preview_image.width + 5, this.preview_image.height + 5)
            image(this.preview_image, windowWidth/2, windowHeight/2)

        }
        super.draw()
        if (this.expanded_box.visible) {
            return this.expanded_box;
        }
    }

    trigger_clicked () {
        this.expanded_box.trigger();
    }

    clicked(x, y) {
        super.clicked(x, y);
        this.expanded_box.clicked(x,y);
    }
}