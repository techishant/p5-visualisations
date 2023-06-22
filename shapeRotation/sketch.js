let angle;
let arr = [];
let origShape = [];
let sides;
function setup(){
  createCanvas(600,600);
  angle = createSlider(0,360, 30);
  sides = createSlider(0,10);
  // arr = [createVector(-200,200), createVector(200, 200), createVector(-200, -200)]
  let eAngles = 360/4;
  let currenIterAngle = 0;
  for(i = 0; i<4; i++){
    arr.push(p5.Vector.fromAngle(radians(currenIterAngle)).setMag(100));
    currenIterAngle+=eAngles;
  }
  for(i=0; i<arr.length; i++) origShape.push(createVector(arr[i].x, arr[i].y));
}


function draw(){
  eAngles = 360/sides.value();
  currenIterAngle = 0;
  arr = []
  origShape = []
  for(i = 0; i<sides.value(); i++){
    arr.push(p5.Vector.fromAngle(radians(currenIterAngle)).setMag(200));
    currenIterAngle+=eAngles;
  }
  for(i=0; i<arr.length; i++) origShape.push(createVector(arr[i].x, arr[i].y));
  background(0);
  translate(width/2, height/2);
  scale(1,-1);
  stroke(255);
   
  stroke(255,0,0);
  for(i =0; i<origShape.length; i++){
    line(origShape[i].x, origShape[i].y, origShape[(i+1)%origShape.length].x, origShape[(i+1)%arr.length].y);
  }

  

  stroke(0,255,0);
  for(i = 0; i<arr.length; i++){
    arr[i] = rotation(origShape[i], angle.value());
  }
  
  strokeWeight(1);


  for(i =0; i<arr.length; i++){
    line(arr[i].x, arr[i].y, arr[(i+1)%arr.length].x, arr[(i+1)%arr.length].y);
  }
  // noLoop();
}

function rotation(v, theta){
  theta = radians(theta);
  let delX = v.x * cos(theta) + v.y * -sin(theta);
  let delY = v.x * sin(theta) + v.y * cos(theta);
  v = createVector(delX,delY);
  return v;
}