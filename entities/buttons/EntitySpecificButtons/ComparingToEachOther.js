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
        var entity_name = "Relative Influence of Departments"
        var text = "The percentage share of influence is based on the total log follower count per entity. What we can see is that the Central publicity department and State council\nhave the most influence out of any other Parent entity in the Anglosphere. However, the Central publicity department  has a disproportionate share at 67%\nwhich implies that it is the most capable at shaping the attitudes of English-speaking people towards the government narrative.\nThus, any accounts linked to the Central publicity department must be especially monitored."
        var graph_explanation_text = ""

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
        text , 20, "Arial", "black"), "rectangle", "white", 1450, 150);
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text, graph_explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)

        this.expanded_box.graph_text_label_box = null

        this.expanded_box.map.set_region_focus ("Anglosphere", null)
    }
}