let deg = 10;
let angleSlider;
let k = 0;
let r = 255;
let g = 0;
let b = 255;
let br1Slider;
let br2Slider;
let br1;
let br2;
let arr = Array();
function setup(){
  createCanvas(600,600);
  angleSlider = createSlider(0, 360);
  br1Slider = createSlider(1, 99);
  br2Slider = createSlider(1, 99);
  background(0);
  colorMode('hsb')
}


function draw(){
  background(0);
  stroke(255);
  scale(2,2);
  r = 255;
  g = 0;
  b = 255;
  k = 0;
  // line(200, 400, 300, 400)
  deg = parseInt(angleSlider.value());
  // deg = (deg + 0.6)%360;
  // deg = 45;

  br1 = br1Slider.value()/100;
  br2 = br2Slider.value()/100;


  strokeWeight(1);
  noFill();
  translate(width*0.25,height*0.4);
  branch(60,0);
  console.log(k);
  // noLoop();
}

function branch(len, hue){
  if(len <=3) {
    // fill(random(1,255),random(1,255),random(1,255));
    noStroke();
    circle(0,0,2);
    noFill();
    return;
  }
  // stroke(random(1,255), random(1,255), random(1,255));
  stroke(hue,255,255);
  k++;
  // stroke(r, g, b);
  // stroke(0, 255, 0);
  j = Math.log2(k);
  // if(Math.pow(2,parseInt(j)) == k)
  {
    // console.log(k);
  line(0, 0, 0, -len);
    // fill(255,0,0);
    // noStroke();
    // circle(0,0,2);
    // noFill();
  // rect(-len/2,-len/2,len)
  // circle(0,0,len)
  }
  translate(0,-len);
  push();
  rotate(radians(deg));
  branch(0.75*len, hue+30);
  // branch(br1*len);
  pop();
  push();
  rotate(radians(-deg));
  branch(0.75*len, hue+30);
  // branch(br2*len);
  pop();
  r-=0.87;
  g+= 0.97;
  b-= 0.37;
}