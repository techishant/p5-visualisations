class Bob {
  constructor(x, y, restLength, mass) {
    this.pos = createVector(x, y);
    this.restLength = restLength;
    this.vel = createVector(0,0);
    this.fixed = false;
    this.mass = mass;
  }

  update() {
    if(!this.fixed)
    this.pos.add(this.vel);
  }

  draw() {
    stroke(255, 255, 255);
    circle(this.pos.x, this.pos.y, 2);
  }
}
