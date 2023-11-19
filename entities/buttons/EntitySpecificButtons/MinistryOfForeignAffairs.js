import { WINDOWWIDTH } from "../../../assets/windowWidth.js";
import { TextLabel } from "../../TextLabel.js";
import { TextLabelBox } from "../../TextLabelBox.js";
import { ButtonBoxExpansion } from "../ButtonBoxExpansion.js";
import { ExpandedBox } from "../ExpandedBox.js";
import { GraphButton } from "../GraphButton.js";

export class MinistryOfForeignAffairs extends ButtonBoxExpansion{
    constructor (x, y, length, width) {
        var graph = "assets/graph_ministry_foreign.png";
        var preview_image = "assets/ministry_of_foreign_affairs.jpg"
        var entity_name = "Ministry Of Foreign Affairs"
        var text = "The Ministry of Foreign Affairs is charged with\nimplementing the foreign policy laid out by the government.\nThey also communicate the government’s narrative\nthrough their embassies and diplomats."
        var graph_explanation_text = "The graph shows the total number of social media followers of actors\nassociated with the ministry in various regions. We can observe\nthat there is a relatively balanced spread, with two major targets being the\nAnglosphere and Bahrain. As the name suggests, this entity is more focused on\nforeign countries, as opposed to some other entities such as\nthe Central Committee of the CCP."

        var button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
        var explanation_text = new TextLabelBox(new TextLabel(-400, 200, 
        text , 20, "Arial", "black"), "rectangle", "white", 600, 150);
        
        var expanded_box = new ExpandedBox("white", graph, explanation_text, graph_explanation_text)
        super(button_text, "rectangloid", "white", length, width, expanded_box, preview_image)


        var data = 
        [null,
            {region: "Anglosphere", value: "5.1 million"},
            {region: "Bahrain", value: "1.1 million"},
            {region: "Hong Kong", value: "853.0 K"},
            {region: "United States", value: "652.1 K"},
            {region: "Pakistan", value: "597.1 K"},
            {region: "South Korea", value: "332.9K"},
            {region: "Myanmar", value: "263 K"},
            {region: "Bangladesh", value: "240 K"},
            {region: "Mexico", value: "225.7K"},
            {region: "Brazil", value: "224.9 K"},
        ]

        this.expanded_box.buttons.push(new GraphButton(302.328125,171 + 5,590,26, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(186.828125,204,357,24, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(157.828125,236,299,22, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(139.328125,267.5,260,29, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(134.828125,301.5,253,29, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(88.328125,329,160,28, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(69.328125,360.5,126,25, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(63.328125,391.5,110,27, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(56.328125,423.5,98,23, this.expanded_box, data, this.expanded_box.buttons.length))
        this.expanded_box.buttons.push(new GraphButton(56.828125,454.5,99,23, this.expanded_box, data, this.expanded_box.buttons.length))
        
    }
}