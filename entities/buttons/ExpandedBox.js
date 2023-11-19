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

        var text = "This graph shows the regional breakdown\nof the targets of the parent entity. The values on the\nx-axis show the total number of followers of actors\nworking for these entities in any given region."

        this.text_label_box = text_label_box;
        this.text_label_box_title = new TextLabelBox(new TextLabel(text_label_box.x, text_label_box.y - text_label_box.width / 2 - 10, "About:", 25, "Georgia", "Black"),
        "rectangle", "White", 150, 40)
        this.graph_text_label_box_title = new TextLabelBox(new TextLabel(400, 200 - 150/2 - 10, "Graph Info:", 25, "Georgia", "Black"),
        "rectangle", "White", 200, 40)
        this.graph_text_label_box = new TextLabelBox(new TextLabel(400, 200,
            text,
            text_label_box.textLabel.text_size, text_label_box.textLabel.font, text_label_box.textLabel.color), "rectangle", text_label_box.color, 600, 150)

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
        
        this.graph_img.resize(0, 400)
        image(this.graph_img, this.x + 400, this.y - 150);

        
        this.text_label_box.draw(0, this.x, this.y);
        this.text_label_box_title.draw(0, this.x, this.y);
        if (this.graph_text_label_box != null){
            this.graph_text_label_box.draw(0, this.x, this.y)
            this.graph_text_label_box_title.draw(0, this.x, this.y)
        }

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