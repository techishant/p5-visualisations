let triangles;
let t1;

function setup(){
  createCanvas(windowWidth,windowHeight);
  // createCanvas(400,400);
  triangles = [];
  for(let i =0; i<20; i++){
    t1 = new Triangle(random(0,width),random(0,height),
    random(0,width),random(0,height),
    random(0,width),random(0,height))
    triangles.push(t1);
  }
}

function draw(){
  background(29,12,26)

  // beginShape();
  stroke(255);
  for(let i = 0; i<triangles.length; i++){
    triangles[i].draw();
    // triangles[i].update();
    let k = triangles[i].circumcircle();
    noFill();
    // vertex(k[0],k[1])
  }
  // endShape(CLOSE);
}

class Triangle{
  constructor(x1,y1,x2,y2,x3,y3){
    this.p1 = createVector(x1,y1);
    this.p2 = createVector(x2,y2);
    this.p3 = createVector(x3,y3);
    this.vel = createVector(random(-1,1), random(-1,1));
    this.col = [random(0,255), random(0,255), random(0,255), random(0,255)]
  }

  update(){
    this.p1.add(this.vel)
    this.p2.add(this.vel)
    this.p3.add(this.vel)

    let ps = [this.p1,this.p2,this.p3];
    for(let i = 0; i<3; i++){
      let p = ps[i];
      if(p.x > width || p.x < 0 || p.y>height || p.y <0){
        this.vel.mult(-1);
        // console.log(p)
      }
    }
  }

  draw(){
    // this.update();
    stroke(255);
    strokeWeight(7);
    // point(this.p1);
    // point(this.p2);
    // point(this.p3);
    noFill();
    strokeWeight(1);
    // triangle(this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y);
    // this.circumcircle()
}


  circumcircle(){
    let m1, m2;
    let mp1, mp2;

    m1 = (this.p2.y - this.p1.y)/(this.p2.x - this.p1.x);
    m2 = (this.p3.y - this.p2.y)/(this.p3.x - this.p2.x);
    m1 = -1/m1;
    m2 = -1/m2;

    mp1 = createVector((this.p2.x+this.p1.x)/2, (this.p2.y + this.p1.y)/2);
    mp2 = createVector((this.p3.x+this.p2.x)/2, (this.p3.y + this.p2.y)/2);

    strokeWeight(7);
    // point(mp1);
    // point(mp2);

    let x = (m2*mp2.x - mp2.y+mp1.y - m1*mp1.x)/(m2-m1);
    let y = m1*(x-mp1.x)+mp1.y;
    // point(x, y)

    let r = dist(x,y,this.p2.x,this.p2.y);
    strokeWeight(1);
    noStroke();
    fill(this.col[0],this.col[1],this.col[2],this.col[3]);
    circle(x,y,2*r);

    return [x,y];
  }
}