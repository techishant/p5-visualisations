class Spring {

  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.k = 0.01;
    this.g = createVector(0,0.2);
    this.dampBy = 0.02;
  }

  update() {
    this.force = p5.Vector.sub(this.b.pos, this.a.pos);
    this.d = this.force.mag()-this.b.restLength;
    this.force.normalize();
    this.force.mult(this.d * this.k);

    this.acc = p5.Vector.div(this.force, this.a.mass)
    this.a.vel.add(this.acc);
    this.a.vel.add(this.g);
    this.a.vel.mult(1-this.dampBy);
    this.acc.mult(0);
    
    this.force.mult(-1);
    
    this.acc = p5.Vector.div(this.force, this.b.mass)
    this.b.vel.add(this.acc);
    this.b.vel.add(this.g);
    this.b.vel.mult(1-this.dampBy);
    this.acc.mult(0);
  }

  draw() {
    stroke(255, 255, 255);
    line(this.a.pos.x, this.a.pos.y,
         this.b.pos.x, this.b.pos.y);
  }
}
