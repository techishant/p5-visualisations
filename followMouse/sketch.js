let ball;
let gravity;
let airFriction;

function setup(){
  createCanvas(400,400);
  ball = new Ball(p5.Vector.fromAngle(radians(90)));
  // gravity = p5.Vector.fromAngle(radians(270));
  // gravity.setMag(4.2);
  // airFriction = p5.Vector.fromAngle(radians(360-290));


}

function draw(){
  background(0);
  translate(width/2, height/2);
  scale(1,-1);
  ball.update();
  stroke(255,255,0)
  strokeWeight(10);
  point(ball.pos)
}


class Ball{
  constructor(vel){
    this.vel = vel;
    this.pos = createVector(0,0);
    this.mousePos = createVector(mouseX-width/2, -mouseY+height/2);
  }
  update(){
    this.mousePos.x = mouseX-width/2;
    this.mousePos.y = -mouseY+height/2; 
    this.mousePos.normalize();
    this.mousePos.setMag(2)
    this.pos.add(this.mousePos)
  }
  
}

// update(){
//   airFriction.x = this.vel.x;
//   airFriction.y = this.vel.y;
//   airFriction.rotate(180);
//   airFriction.setMag(0.01);
//   this.vel = this.vel.add(airFriction);
//   this.pos = this.pos.add(this.vel);
//   this.pos = this.pos.add(gravity);

//   if(this.pos.x >= width/2-10 || this.pos.x <= -width/2+10){
//     this.pos.x = (this.pos.x < 0) ? -width/2+10 : width/2-10;
//     this.vel.rotate(radians(180));
//     this.vel.setMag(this.vel.mag-0.5);
//   }
//   if(this.pos.y >= height/2-10 || this.pos.y <= -height/2+10){
//     this.pos.y = (this.pos.y < 0) ? -height/2+10 : height/2-10;
//     this.vel.rotate(radians(180));
//     this.vel.setMag(this.vel.mag-0.5);
//   }
//   console.log(this.vel)
// }