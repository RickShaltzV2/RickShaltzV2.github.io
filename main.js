import { WorldMap } from "./entities/Map.js";
import { TextLabel } from "./entities/TextLabel.js";
import { TextLabelBox } from "./entities/TextLabelBox.js";
import { Button } from "./entities/buttons/Button.js";
import { ButtonBoxExpansion } from "./entities/buttons/ButtonBoxExpansion.js";
import { CentralPublicityDepartment } from "./entities/buttons/EntitySpecificButtons/CentralPublicityDepartment.js";
import { ExpandedBox } from "./entities/buttons/ExpandedBox.js";


// This will fix the module problem
window.setup = setup;
window.draw = draw;
var windowWidth = window.windowWidth;
var windowHeight = window.windowHeight;
// window.windowResized = windowResized
window.mouseClicked = mouseClicked
// window.keyPressed = keyPressed

function setup() {
  windowWidth = window.windowWidth;
  windowHeight = window.windowHeight;
  var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  var test_text = new TextLabel(windowWidth/2, 100, "Data Interference Of Foreign Entities", 50, "Georgia", "black");
  test_text_box = new TextLabelBox(test_text, "rectangloid", "white");

  add_info_button("Ministry of Foreign Affairs", 
  "This is a truly insightful bar plot because it really shows how much influence they have in the anglosphere.",
  null, windowWidth/2, 5*windowHeight/6, "assets/ministry_of_foreign_affairs.jpg")

  buttons.push(new CentralPublicityDepartment(windowWidth/2 - 400, 5*windowHeight/6, 300, 60))

  add_info_button("State Council", 
  "The state council controls everything.",
  null, windowWidth/2 + 400, 5*windowHeight/6, "assets/state_council.jpg")
  

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

  // if (first_clicked == null) {
  //   first_clicked = {x: mouseX, y: mouseY}
  // } else {
  //   console.log("this.expanded_box.buttons.push(new GraphButton(" + ((first_clicked.x + mouseX)/2 - 1000) + "," + ((first_clicked.y + mouseY)/2) + "," + (mouseX - first_clicked.x) + "," + (mouseY - first_clicked.y) + ", this.expanded_box))")
  //   first_clicked = null
  // }
  
}


function add_info_button(entity_name, info_text, graph, x, y, preview_image) {
  var test_button_text = new TextLabel(x, y, entity_name, 20, "Arial", "black");
  var explanation_text = new TextLabelBox(new TextLabel(0, windowWidth/10, 
  info_text
  , 15, "Arial", "black"), "rectangle", "white");
  buttons.push(new ButtonBoxExpansion(test_button_text, "rectangloid", "white", 300, 60, new ExpandedBox("white", graph, 
  explanation_text), preview_image))
}