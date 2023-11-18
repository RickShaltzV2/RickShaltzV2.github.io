import { Entity } from "../Entity.js";
import { TextLabel } from "../TextLabel.js";
import { TextLabelBox } from "../TextLabelBox.js";
import { CloseButton } from "./CloseButton.js";

export class ExpandedBox extends Entity {
    constructor (color, graph_img, text_label_box) {
        super(windowWidth/2, - windowWidth/2 - 10, 9*windowWidth/10, 9*windowHeight/10)
        this.color = color

        this.graph_img = loadImage("assets/sample_graph.png")
        this.text_label_box = text_label_box;

        this.triggered = false
        this.visible = false

        this.buttons = [new CloseButton(new TextLabel(this.length/2 - 40, -this.width/2 + 40, "X", 40, "Arial", "black"),"rectangle", "white", 50, 50, this)]

        this.title = null
    }

    draw () {
        if (this.triggered && this.y < windowHeight/2) {
            this.y += 30;
        }
        
        if (!this.triggered && this.y > - this.width - 10) {
            this.y -= 30;
        } else if (!this.triggered && this.y <= - this.width - 10) {
            this.visible = false
        }

        if (!this.visible) {
            return
        }

        if (this.triggered) {
            fill("rgba(30, 30, 30, 0.5)")
            rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight)
        }

        fill(this.color);
        rect(this.x, this.y, this.length, this.width)
        
        image(this.graph_img, this.x, this.y - windowWidth/10, 400, 300);
        
        this.text_label_box.draw(0, this.x, this.y);

        for (var i in this.buttons) {
            this.buttons[i].draw(this.x, this.y)
        }

        this.title.draw(0, this.x, this.y);
    }

    trigger () {
        this.triggered = true
        this.visible = true
    }

    clicked(x, y) {
        for (var i in this.buttons) {
            this.buttons[i].clicked(x, y)
        }
    }

    close () {
        this.triggered = false;
    }

    set_parent(text_label_box){
        this.title = new TextLabelBox(new TextLabel(0, -this.width/2, text_label_box.textLabel.text,
        text_label_box.textLabel.text_size, text_label_box.textLabel.font, text_label_box.textLabel.color), 
        "rectangle", "white", text_label_box.length, text_label_box.width);
    }
}