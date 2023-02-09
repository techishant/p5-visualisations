let r = 220;
let n = 1;
var total = 300;

function setup() {
  createCanvas(600, 600);
  preVal = createInput('',Number);
  stopAt = createInput('',Number);
  preVal_ = '';
}
function mouseClicked() {
  if(animate){
    animate = false;
  }else if(!animate){
    animate = true;
  }
}

function getVector(index, total, r) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle );
  v.mult(r);
  return v;
}
animate = false
function draw() {
  if(preVal.value() != preVal_){
    if(preVal.value() == ''){
      n = 0;
    }else{
      n = parseFloat(preVal.value());
    }
    preVal_ = preVal.value();
  }
  // console.log(animate)
  if(animate && (n < parseFloat(stopAt.value()) || stopAt.value() == '')){
    n = n+0.01;
  }
  background(0)
  fill(0)
  circle(height/2, width/2, 2*r)
  
  stroke(600)
  for(i = 1; i<=total; i++){
    pc = getVector(i, total, r);
    pc2 = getVector(i*n, total, r);
    line(pc.x + width/2, pc.y + height/2 , pc2.x + width/2, pc2.y + height/2)
  }
}