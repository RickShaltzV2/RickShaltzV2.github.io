import { WINDOWWIDTH } from "../../../assets/windowWidth.js";
import { TextLabel } from "../../TextLabel.js";
import { TextLabelBox } from "../../TextLabelBox.js";
import { ButtonBoxExpansion } from "../ButtonBoxExpansion.js";
import { ExpandedBox } from "../ExpandedBox.js";
import { GraphButton } from "../GraphButton.js";

export class ComitteeCcp extends ButtonBoxExpansion{
    constructor (x, y, length, width) {
        var graph = "assets/graph_commitee_of_ccp.png";
        var preview_image = "assets/comittee_of_ccp.jpg"
        var entity_name = "Committee of CCP"
        var text = "Information about the committee of CCP"

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
        text , 15, "Arial", "black"), "rectangle", "white");
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)

        var data = 
        [null,
            {region: "China",value: "170.4 million"},
            {region: "Anglosphere",value: "62.3 million"},
            {region: "Australia",value: "1.5 million"},
            {region: "Hong Kong",value: "1.4 million"},
            {region: "USA",value: "29.5 K"},
            {region: "Japan",value: "9.9K"},
            {region: "Xinjiang",value: "2.4K"},
            ]
        
    
    }
}