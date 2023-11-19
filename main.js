import { WorldMap } from "./entities/Map.js";
import { TextLabel } from "./entities/TextLabel.js";
import { TextLabelBox } from "./entities/TextLabelBox.js";
import { Button } from "./entities/buttons/Button.js";
import { ButtonBoxExpansion } from "./entities/buttons/ButtonBoxExpansion.js";
import { CentralPublicityDepartment } from "./entities/buttons/EntitySpecificButtons/CentralPublicityDepartment.js";
import { ExpandedBox } from "./entities/buttons/ExpandedBox.js";
import { WINDOWHEIGHT } from "./assets/windowWidth.js";
import { WINDOWWIDTH } from "./assets/windowWidth.js";
import { MinistryOfForeignAffairs } from "./entities/buttons/EntitySpecificButtons/MinistryOfForeignAffairs.js";
import { StateCouncil } from "./entities/buttons/EntitySpecificButtons/StateCouncil.js";
import { ComitteeCcp } from "./entities/buttons/EntitySpecificButtons/ComitteeCcp.js";
// This will fix the module problem
window.setup = setup;
window.draw = draw;
// window.windowResized = windowResized
window.mouseClicked = mouseClicked
// window.keyPressed = keyPressed

function setup() {
  var cnv = createCanvas(WINDOWWIDTH, WINDOWHEIGHT);
  var x = (windowWidth - WINDOWWIDTH) / 2;
  var y = (windowHeight - WINDOWHEIGHT) / 2;
  cnv.position(x, y);

  var test_text = new TextLabel(WINDOWWIDTH/2, 100, "Data Interference Of Foreign Entities", 50, "Georgia", "black");
  test_text_box = new TextLabelBox(test_text, "rectangloid", "white");

  buttons.push(new MinistryOfForeignAffairs(WINDOWWIDTH/2 + 175, 5*WINDOWHEIGHT/6, 300, 60))

  buttons.push(new CentralPublicityDepartment(WINDOWWIDTH/2 - 175, 5*WINDOWHEIGHT/6, 300, 60))

  buttons.push(new StateCouncil(WINDOWWIDTH/2 + 500, 5*WINDOWHEIGHT/6, 300, 60))
  buttons.push(new ComitteeCcp(WINDOWWIDTH/2 - 500, 5*WINDOWHEIGHT/6, 300, 60))
  

  textAlign(CENTER, CENTER);
  rectMode(CENTER, CENTER);
  imageMode(CENTER, CENTER)
}

var test_text_box;
var buttons = [];
var top_button = null;
var test_map = new WorldMap(0, 0, 0, 0)

function draw () {
  background(150)
  test_text_box.draw()

  var overlap_draw = null

  top_button = null
  for (var i in buttons) {
    var ret = buttons[i].draw()

    if (ret != null){
      overlap_draw = ret;
      top_button = buttons[i]
    }
  }

  // test_map.draw()

  if (overlap_draw != null)
    overlap_draw.draw()
}

// dev tools
var first_clicked;

function mouseClicked () {
  if (top_button == null){
    for (var i in buttons) {
      buttons[i].clicked(mouseX, mouseY);
    }
  } else {
    top_button.clicked(mouseX, mouseY)
  }

  // Dev tools
  if (first_clicked == null) {
    first_clicked = {x: mouseX, y: mouseY}
  } else {
    console.log("this.expanded_box.buttons.push(new GraphButton(" + ((first_clicked.x + mouseX)/2 - 1140) + "," + ((first_clicked.y + mouseY)/2) + "," + (mouseX - first_clicked.x) + "," + (mouseY - first_clicked.y) + ", this.expanded_box, data, this.expanded_box.buttons.length))")
    first_clicked = null
  }
  
}


function add_info_button(entity_name, info_text, graph, x, y, preview_image) {
  var test_button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
  var explanation_text = new TextLabelBox(new TextLabel(0, WINDOWWIDTH/10, 
  info_text
  , 15, "Arial", "black"), "rectangle", "white");
  buttons.push(new ButtonBoxExpansion(test_button_text, "rectangloid", "white", 300, 60, new ExpandedBox("white", graph, 
  explanation_text), preview_image))
}