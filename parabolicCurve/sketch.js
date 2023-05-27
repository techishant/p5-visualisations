function setup(){
  createCanvas(800,800);
  Button_Reset = createButton("RESET");
  Button_Redraw_Trajectory = createButton("Redraw Trajectory");
  speedSlider = createSlider(0, 100, 60, 1);
  a_slider = createSlider(-10,10, -0.01, 0.01);
  b_slider = createSlider(-10,10, 0 , 0,01);
  c_slider = createSlider(-10,10, 1, 0,01);
  prediction = createCheckbox("Prediction", false);
}


let xVal = -200,
a = -0.01,
b = 0,
c = 1;
let arr = [];
i = 0
let animation = true;
function draw(){
  speed = speedSlider.value()/100;
  
  background(0);
  translate(width/2, height/2)
  scale(1,-1);
  
  drawGrids();
  if(prediction.checked() == true) predictTrajectory();
  
  if(animation){
    const pong = new ball();
    yVal = foo(a,b,c,xVal)
    pong.updatePos(xVal, yVal);
    pong.move();
  }
  if(xVal<200)xVal+=speed;
  else animation = false;


  if((i-200)-xVal <0.1) {
    arr.push({x: xVal, y: yVal});
    i++;
  }
  drawTrajectory();

  // angle = atan2(xVal, yVal);
  // console.log(angle);
  // drawArrow(cos(angle), sin(angle));

  Button_Reset.mousePressed(reset)
  Button_Redraw_Trajectory.mousePressed(redrawTrajectory)

}

// function drawArrow(x,y){
//   strokeWeight(8);
//   point(0+ x*100,height/2-180 + y*100);
//   strokeWeight(1);
//   line(0,height/2, 0+ x*100,height/2-180 + y*100);
// }

function drawGrids(){
  for(j =-width/2; j<=width/2; j+=width/20){
    strokeWeight(1);
    stroke(125);
    if(j == 0) stroke(255)
    line(j,-width/2, j,width/2);
  }
  for(j =-height/2; j<=height/2; j+=height/20){
    strokeWeight(1);
    stroke(125);
    if(j == 0) stroke(255)
    line(-height/2,j, height/2, j);
  }
}

function foo(a, b, c, x){
  y = a*x*x + b*x + c;
  return y; 
}

function redrawTrajectory(){
  xVal = -200;
  arr = []
  i = 0;
  animation = true;
  a = a_slider.value();
  b = b_slider.value();
  c = c_slider.value();
}

function reset(){
  xVal = -200;
  arr = [];
  i = 0;
  animation = true;
  a_slider.value(-0.01);
  b_slider.value(0);
  c_slider.value(1);
  a = a_slider.value();
  b = b_slider.value();
  c = c_slider.value();
}

function drawTrajectory(){
  strokeWeight(2);
  stroke(255);
  for(i = 0; i<arr.length; i++){
    point(arr[i].x, arr[i].y);
  }
}

function predictTrajectory(){
  for(x = -200; x<=200; x+=0.5){
    y = foo(a_slider.value(), b_slider.value(), c_slider.value(), x)
    stroke(0, 200, 0)
    strokeWeight(2)
    point(x,y)
  }
}

class ball{
  constructor(){
    this.coor = {x: 0, y: 0};
  }
  
  move(){
    stroke(255);
    strokeWeight(10);
    point(this.coor.x, this.coor.y);
    // console.log(this.coor)
  }

  updatePos(x,y){
    this.coor.x = x;
    this.coor.y = y;
  }
}