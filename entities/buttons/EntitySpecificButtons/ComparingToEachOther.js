import { WINDOWWIDTH } from "../../../assets/windowWidth.js";
import { TextLabel } from "../../TextLabel.js";
import { TextLabelBox } from "../../TextLabelBox.js";
import { ButtonBoxExpansion } from "../ButtonBoxExpansion.js";
import { ExpandedBox } from "../ExpandedBox.js";
import { GraphButton } from "../GraphButton.js";

export class ComparingToEachOther extends ButtonBoxExpansion{
    constructor (x, y, length, width) {
        var graph = "assets/graph_comparing_to_each_other.png";
        var preview_image = "assets/preview_against_each_other.png"
        var entity_name = "Against Each Other"
        var text = "Compared to each other info here"

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
        text , 15, "Arial", "black"), "rectangle", "white");
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)

        this.expanded_box.graph_text_label_box = null
    }
}