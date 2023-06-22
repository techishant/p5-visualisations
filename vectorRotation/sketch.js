let thetaSlider;
let spanElement;
function setup() {
  createCanvas(500, 500)
  thetaSlider = createSlider(0, 360);
  spanElement = document.getElementById("span");
}

var r = 200;
function draw(){
  var v = createVector(1,-1);
  background(0);
  translate(width/2, height/2);
  scale(1,-1);

  noFill(); 
  stroke(255);
  strokeWeight(2);
  circle(0,0, 2*r);

  strokeWeight(8);
  // v.normalize();
  v.setMag(r);
  point(v);
  strokeWeight(2);
  line(0,0,v.x,v.y);
  
  
  stroke(255,0,0);
  let theta = radians(thetaSlider.value());
  spanElement.innerText = thetaSlider.value();
  let delX = v.x * cos(theta) - v.y * sin(theta);
  let delY = v.x * sin(theta) + v.y * cos(theta);
  /**
   * 0 = theta angle
   * ---   ---        ---                ---  ---    ---
   * |       |        |                    |  |       |  
   * |   x'  |  ----  |   cos 0   -sin 0   |  |   x   |
   * |   y'  |  ----  |   sin 0   cos 0    |  |   y   | 
   * |       |        |                    |  |       |
   * ---   ---        ---                ---  ---   ---
   */
  strokeWeight(8);
  point(delX, delY);
  strokeWeight(2);
  line(0,0,delX, delY);

}

