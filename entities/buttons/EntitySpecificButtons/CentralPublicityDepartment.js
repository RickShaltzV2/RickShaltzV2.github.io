import { WINDOWWIDTH } from "../../../assets/windowWidth.js";
import { TextLabel } from "../../TextLabel.js";
import { TextLabelBox } from "../../TextLabelBox.js";
import { ButtonBoxExpansion } from "../ButtonBoxExpansion.js";
import { ExpandedBox } from "../ExpandedBox.js";
import { GraphButton } from "../GraphButton.js";

export class CentralPublicityDepartment extends ButtonBoxExpansion{
    constructor (x, y, length, width) {
        var graph = "assets/graph_central_publicity_department.png";
        var preview_image = "assets/central_publicity_department.jpg"
        var entity_name = "Central Publicity Department"
        var text = "About the central Publicity Department: they do a lot of stuff!"

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
        text , 15, "Arial", "black"), "rectangle", "white");
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)


        var data = 
        [null, {region: "Anglosphere",value: "436.5 million"},
        {region: "India",value: "31.3 million"},
        {region: "la Francophonie",value: "29.4 million"},
        {region: "MENA",value: "16.4 million"},
        {region: "Pakistan",value: "15.5 million"},
        {region: "Hispanophone",value: "11.1 million"},
        {region: "China",value: "10.4 million"},
        {region: "Japan",value: "8.5 million"},
        {region: "United States",value: "6.3 million"},
        {region: "African Union",value: "5.6 million"}]

        this.expanded_box.buttons.push(new GraphButton(407 - 140,153.5,435,25, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(188.5,189,272,24, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(185,220,263,22, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(158.5,254,210,26, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(156,283.5,205,23, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(142,318,177,28, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(138,350.5,171,27, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(124,382,143,24, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(111,415,117,30, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(106,448.5,107,27, this.expanded_box, data, this.expanded_box.buttons.length))
        
    }
}