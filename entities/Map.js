import { Entity } from "./Entity.js";
import { country } from "../assets/countries.js";
import { WINDOWHEIGHT, WINDOWWIDTH } from "../assets/windowWidth.js";

export class WorldMap extends Entity {
    constructor (x, y, length, width) {
        super(x, y, length, width)
        this.size = 0.4;
        this.countryPolygons = [];

        var copy_country = JSON.parse(JSON.stringify(country));

        for (var i in country) {
            copy_country[i].vertexPoint[0][1] += x
            copy_country[i].vertexPoint[0][2] += y
        }


        for (let i = 0; i < country.length; i++) {
            this.countryPolygons.push(this.convertPathToPolygons(
                copy_country[i].vertexPoint
            ));
          }

        this.fade = 0;
        this.fading = false;
        this.highlighted_region = null
        this.regions_to_cover = []
        this.follower_count = null;
    }

    convertPathToPolygons(path) {
        let coord_point = [0, 0];
        let polygons = [];
        let currentPolygon = [];

        //For loop para calcular os pontos do vertex
        for (const node of path) {
            if (node[0] == "m") {
            coord_point[0] += node[1] * this.size;
            coord_point[1] += node[2] * this.size;
            currentPolygon = [];
            } else if (node[0] == "M") {
            coord_point[0] = node[1] * this.size;
            coord_point[1] = node[2] * this.size;
            currentPolygon = [];
            } else if (node == "z") {
            currentPolygon.push([...coord_point]);
            polygons.push(currentPolygon);
            } else {
            currentPolygon.push([...coord_point]);
            coord_point[0] += node[0] * this.size;
            coord_point[1] += node[1] * this.size;
            }
        }
        
        return polygons;
    }

    detectCollision(polygon, x, y) {
        let c = false;
        // for each edge of the polygon
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            // Compute the slope of the edge
            let slope = (polygon[j][1] - polygon[i][1]) / (polygon[j][0] - polygon[i][0]);
            
            // If the mouse is positioned within the vertical bounds of the edge
            if (((polygon[i][1] > y) != (polygon[j][1] > y)) &&
                // And it is far enough to the right that a horizontal line from the
                // left edge of the screen to the mouse would cross the edge
                (x > (y - polygon[i][1]) / slope + polygon[i][0])) {
            
            // Flip the flag
            c = !c;
            }
        }
        
        return c;
    }

    draw() {
        if (this.fading && this.fade < 1) {
            this.fade += 0.01;
        } 

        if (!this.fading && this.fade > 0) {
            this.fade -= 0.1;
        } else if (this.fade <= 0) {
            return
        }

        stroke("rgba(255, 255, 255," + this.fade + ")");
        strokeWeight(1);
        // let collision = false;

        for (let i = 0; i < this.countryPolygons.length; i++) {
          fill("rgba(100, 100, 100," + this.fade + ")");
        //   if (!collision && mouseIsPressed) {
        //     collision = this.countryPolygons[i].some(poly => this.detectCollision(poly, mouseX, mouseY));
        //     if (collision) {
        //       fill('green');
        //     }
        //   }
            if (this.regions_to_cover.includes(country[i].name)){
                fill("rgba(255, 102, 0," + this.fade + ")")
            }

          for (const poly of this.countryPolygons[i]) {
            beginShape();
            for (const vert of poly) {
              vertex(...vert);
            }
            endShape();
          }
        }
        stroke(0)
        strokeWeight(0)

        if (this.follower_count != null) {
            var x_pos = this.x + WINDOWWIDTH/8;
            var y_pos = this.y + WINDOWHEIGHT/5;

            fill("black")
            textSize(30)
            text(this.highlighted_region + " Follower Count: " + this.follower_count, x_pos, y_pos);
        }
    }

    fade_in() {
        if (!this.fading)
            this.fading = true;
    }

    fade_out() {
        if (this.fading) {
            this.fading = false;
        }
    }

    set_region_focus (highlighted_region, value) {
        if (highlighted_region == null) {
            this.regions_to_cover = []
            return
        }

        this.highlighted_region = highlighted_region
        this.follower_count = value;
        if (highlighted_region == "Anglosphere") {
            this.regions_to_cover = ['United States', 'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'Ireland', 'South Africa']
        } else if (highlighted_region == "MENA") {
            this.regions_to_cover = ["Algeria", "Bahrain", "Egypt", "Iraq", "Iran", "Israel", "Jordan", "Kuwait", "Lebanon", "Libya", "Morocco", "Oman", 
            "Palestine", "Qatar", "Saudi Arabia", "Sudan", "Syria", "Tunisia", "United Arab Emirates", "Yemen"]
        } else if (highlighted_region == "la Francophonie")
            this.regions_to_cover = ['Albania', 'Andorra', 'Armenia', 'Belgium', 'Benin', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Ivory Coast', 'Democratic Republic of Congo', 'Djibouti', 'Dominica', 'Equatorial Guinea', 'Egypt', 'France', 'Gabon', 'Guinea', 'Greece', 'Guinea Bissau', 'Haiti', 'Laos', 'Lebanon', 'Luxembourg', 'Madagascar', 'Mali', 'Mauritius', 'Moldova ', 'Monaco', 'Niger', 'Romania ', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Switzerland', 'Togo', 'Tunisia', 'Vanuatu', 'Vietnam']
        else if (highlighted_region == "African Union") {
            this.regions_to_cover = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Democratic Republic of the Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe']

        } else if (highlighted_region == "Hispanophone") {
            this.regions_to_cover = ['Spain', 'Mexico', 'Colombia', 'Argentina', 'Peru', 'Venezuela', 'Chile', 'Ecuador', 'Guatemala', 'Cuba', 'Bolivia', 'Dominican Republic', 'Honduras', 'Paraguay', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Puerto Rico', 'Panama', 'Uruguay.']

        }
            else {
            this.regions_to_cover = [highlighted_region]
        }
    }

}