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
        var text = "The state council is a body that supervises the government bureaucracy,\nhence tasked with carrying out the administrative function of the state.\nThey control the Xinhua News Agency which is their primary mode of\ndisseminating the government’s narrative"

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(-400, 200, 
            text , 20, "Arial", "black"), "rectangle", "white", 800, 150);
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)

        var data = 
        [null,
            {region: "China",value: "170.4 million"},
            {region: "Anglosphere",value: "62.3 million"},
            {region: "Australia",value: "1.5 million"},
            {region: "Hong Kong",value: "1.4 million"},
            {region: "United States",value: "29.5 K"},
            {region: "Japan",value: "9.9K"},
            {region: "Xinjiang",value: "2.4K"},
            ]

            this.expanded_box.buttons.push(new GraphButton(311,176.5,600,25, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(284.5,221.5,545,31, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(200,264.5,378,37, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(199.5,312,375,36, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(107,360,190,40, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(77.5,406.5,131,35, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(49.5,452,75,38, this.expanded_box, data, this.expanded_box.buttons.length))
    
    }
}