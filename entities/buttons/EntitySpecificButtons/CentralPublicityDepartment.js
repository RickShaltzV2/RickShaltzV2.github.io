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
        var explanation_text = new TextLabelBox(new TextLabel(0, windowWidth/10, 
        text , 15, "Arial", "black"), "rectangle", "white");
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)


        var data = 
            [null,
                {region: "Anglosphere", value: "400 million"},
            {region: "India", value: "31 million"},
            {region: "la Francophonie", value: "29.4 million"},
            {region: "MENA", value: "16.4 million"},
            {region: "Pakistan", value: "15.5 million"},
            {region: "Hispanophone", value: "11.1 million"},
            {region: "China", value: "10.4 million"},
            {region: "Japan", value: "8.5 million"},
            {region: "United States", value: "6.3 million"},
            {region: "African Union", value: "5.6 million"},

            
        ]

        this.expanded_box.buttons.push(new GraphButton(271,257.5,660,25, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(85.5,296.5,291,29, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(81.5,334,273,28, this.expanded_box, data,this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(37,376,178,28, this.expanded_box, data,this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(29,413.5,168,25, this.expanded_box, data,this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(12.5,450.5,139,25, this.expanded_box, data,this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(11.5,489,131,32, this.expanded_box,data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(7,531,120,28, this.expanded_box,data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(-3.5,568.5,99,25, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(-8.5,603.5,91,25, this.expanded_box, data, this.expanded_box.buttons.length))
        
    }
}