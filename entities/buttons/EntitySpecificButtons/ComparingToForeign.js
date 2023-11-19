import { WINDOWWIDTH } from "../../../assets/windowWidth.js";
import { TextLabel } from "../../TextLabel.js";
import { TextLabelBox } from "../../TextLabelBox.js";
import { ButtonBoxExpansion } from "../ButtonBoxExpansion.js";
import { ExpandedBox } from "../ExpandedBox.js";
import { GraphButton } from "../GraphButton.js";

export class ComparingToForeign extends ButtonBoxExpansion{
    constructor (x, y, length, width) {
        var graph = "assets/graph_compare_with_native.png";
        var preview_image = "assets/preview_vs.jpg"
        var entity_name = "Against Western Media"
        var text = "The graph above displays the total social media followers (Instagram, Facebook, X (Twitter), Threads, Youtube,  TikTok),\ncompared against different parent entities in the Anglosphere and China. The red bars show parent entities from\nChina and the blue bars show parent entities from news sources in the Anglosphere. As seen from the plot, the top\nthree most followers across all entities are Chinese parent entities, surpassing well over the next Anglosphere entity, CNN, by 90 million followers.\nThis tells us that Chinese entities have more influence overall than Anglosphere entities."
        var graph_explanation_text = ""

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
        text , 20, "Arial", "black"), "rectangle", "white", 1450, 150);
        
        

        var expanded_box = new ExpandedBox("white", graph, explanation_text, graph_explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)

        this.expanded_box.graph_text_label_box = null

        var data = 
        [null,
            {region: "China", value: "588.7 million"},
            {region: "China", value: "235.6 million"},
            {region: "China", value: "234.0 million"},
            {region: "United States", value: "143.7 million"},
            {region: "United Kingdom", value: "93.6 million"},
            {region: "United States", value: "67.9 million"},
            {region: "China", value: "13.4 million"},
            {region: "Canada", value: "5.4 million"},
            {region: "Australia", value: "4.3 million"},
        ]

        this.expanded_box.buttons.push(new GraphButton(368.5,177,524,26, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(330,209,445,28, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(329,243,443,24, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(307.5,279.5,402,27, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(285.5,315,356,28, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(271.5,349,332,28, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(204,384.5,193,31, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(160.5,420,108,28, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(149.5,456.5,86,29, this.expanded_box, data, this.expanded_box.buttons.length))
    }

    
}