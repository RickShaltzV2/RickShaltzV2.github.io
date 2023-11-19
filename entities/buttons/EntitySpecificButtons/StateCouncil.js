import { WINDOWWIDTH } from "../../../assets/windowWidth.js";
import { TextLabel } from "../../TextLabel.js";
import { TextLabelBox } from "../../TextLabelBox.js";
import { ButtonBoxExpansion } from "../ButtonBoxExpansion.js";
import { ExpandedBox } from "../ExpandedBox.js";
import { GraphButton } from "../GraphButton.js";

export class StateCouncil extends ButtonBoxExpansion{
    constructor (x, y, length, width) {
        var graph = "assets/graph_state_council.png";
        var preview_image = "assets/state_council.jpg"
        var entity_name = "State Council"
        var text = "Information about the state council"

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
        text , 15, "Arial", "black"), "rectangle", "white");
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)

        var data = 
        [null,
            {region: "Anglosphere",value: "128.9 million"},
            {region: "China",value: "107.1 million"},
            {region: "Egypt",value: "1.8 million"},
            {region: "Hong Kong",value: "1.4 million"},
            {region: "Myanmar",value: "937.5K"},
            {region: "Hispanophone", value: "78.3K"},
            {region: "United Kingdom",value: "72.5K"},
            {region: "Japan",value: "60.8K"},
            {region: "United States",value: "35.1K"},
            {region: "Thailand",value: "11.3K"}]
        
            this.expanded_box.buttons.push(new GraphButton(309.8125,155,529,26, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(306.8125,186.5,519,25, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(208.8125,219,323,24, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(203.8125,250.5,315,23, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(206.8125,285.5,319,27, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(150.3125,316.5,208,29, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(149.3125,349.5,202,31, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(145.3125,384,196,28, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(131.8125,415.5,169,27, this.expanded_box, data, this.expanded_box.buttons.length))
            this.expanded_box.buttons.push(new GraphButton(107.3125,449.5,118,27, this.expanded_box, data, this.expanded_box.buttons.length))
    }
}