import { WINDOWHEIGHT, WINDOWWIDTH } from "../../assets/windowWidth.js";
import { Entity } from "../Entity.js";
import { WorldMap } from "../Map.js";
import { TextLabel } from "../TextLabel.js";
import { TextLabelBox } from "../TextLabelBox.js";
import { CloseButton } from "./CloseButton.js";
import { GraphButton } from "./GraphButton.js";

export class ExpandedBox extends Entity {
    constructor (color, graph_img, text_label_box) {
        super(WINDOWWIDTH/2, - WINDOWHEIGHT/2 - 100, 9*WINDOWWIDTH/10, 9*WINDOWHEIGHT/10)
        this.color = color

        if (graph_img != null) {
            this.graph_img = loadImage(graph_img)
        } else {
            this.graph_img = loadImage("assets/sample_graph.png")
        }

        this.text_label_box = text_label_box;

        this.triggered = false
        this.visible = false

        this.buttons = [new CloseButton(new TextLabel(this.length/2 - 40, -this.width/2 + 40, "X", 40, "Arial", "black"),"rectangle", "white", 50, 50, this)]

        this.title = null
        this.map = new WorldMap(WINDOWWIDTH/2 - 600, WINDOWHEIGHT/2 - 100, 0, 0);
    }

    draw () {
        if (this.triggered && this.y < WINDOWHEIGHT/2) {
            this.y += 30;
        } else if (this.triggered && this.y > WINDOWHEIGHT/2) {
            this.map.fade_in()
        }
        
        if (!this.triggered && this.y > - this.width - 10) {
            this.y -= 30;
            this.map.fade_out()
        } else if (!this.triggered && this.y <= - this.width - 10) {
            this.visible = false
        }

        if (!this.visible) {
            return
        }

        if (this.triggered) {
            fill("rgba(30, 30, 30, 0.5)")
            rect(WINDOWWIDTH/2, WINDOWHEIGHT/2, WINDOWWIDTH, WINDOWHEIGHT)
        }

        fill(this.color);
        rect(this.x, this.y, this.length, this.width)
        
        this.graph_img.resize(0, 500)
        image(this.graph_img, this.x + 400, this.y - 150);
        
        this.text_label_box.draw(0, this.x, this.y);

        for (var i in this.buttons) {
            this.buttons[i].draw(this.x, this.y)
        }

        this.title.draw(0, this.x, this.y);

        this.map.draw()
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

    set_region_focus(region, value) {
        this.map.set_region_focus(region, value)
    }
}