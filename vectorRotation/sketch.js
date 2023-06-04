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
  let delX = v.x * cos(theta) - v.x * sin(theta);
  let delY = v.y * sin(theta) + v.y * cos(theta);
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

  let arr = [createVector(20,30),createVector(120,30),createVector(120,-70), createVector(20,-70)];
  let origarr = [createVector(20,30),createVector(120,30),createVector(120,-70), createVector(20,-70)];

  for(i =0; i<arr.length; i++){
    if(i == 1 || i==2){
      arr[i].x =  arr[i].x * cos(theta) - arr[i].x * sin(theta);
      arr[i].y =  arr[i].y * sin(theta) + arr[i].y * cos(theta);
    }
  }
  for(i=0; i<arr.length; i++){
    line(arr[i].x, arr[i].y, arr[(i+1)%(arr.length)].x,arr[(i+1)%(arr.length)].y);
    
  }
  stroke(220);
  strokeWeight(1);
  for(i=0; i<arr.length; i++){
    line(origarr[i].x, origarr[i].y, origarr[(i+1)%(origarr.length)].x,origarr[(i+1)%(origarr.length)].y);
  }
}

