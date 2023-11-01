let joe;
let ROTATION_SLIDER;

function setup(){
    createCanvas(400,400);
    ROTATION_SLIDER = createSlider(0, 360);
    joe = new Entity(0,0);

}

function draw(){
    background(0);
    translate(width/2, height/2);
    scale(1,-1);

    joe.update();
    joe.draw();
}

function drawArrow(base, vec, myColor) {
      push();
      stroke(myColor);
      strokeWeight(3);
      fill(myColor);
      translate(base.x, base.y);
      line(0, 0, vec.x, vec.y);
      rotate(vec.heading());
      let arrowSize = 7;
      translate(vec.mag() - arrowSize, 0);
      triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
      pop();
    }


class Entity{

    constructor(x, y){
        this.pos = createVector(x,y);

        this.vel = p5.Vector.fromAngle(radians(ROTATION_SLIDER.value()));
        this.vel.setMag(2);
    }

    update(){
        // this.pos.add()
        this.vel.normalize();
        this.vel.x = (this.vel.x+cos(radians(ROTATION_SLIDER.value())));
        // this.vel.y = (this.vel.y+sin(radians(ROTATION_SLIDER.value())));
        this.vel.setMag(2);
        console.log(ROTATION_SLIDER.value())
        this.pos = p5.Vector.add(this.pos, this.vel);    
    }

    draw(){
        drawArrow(this.pos, p5.Vector.add(this.pos, this.vel).normalize().setMag(50), 'red');
        stroke(255);
        strokeWeight(10);
        point(this.pos.x, this.pos.y);
    }

   
}