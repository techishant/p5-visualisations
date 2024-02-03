let x1;
let factor;
let sun;

function setup(){
    createCanvas(700,700);
    factor = 100_00_000;
    x1 = new Planet(5.97219 * Math.pow(10,24), 6371000);
    sun = new Star(1.9891 * Math.pow(10,30), 696340000);
}

function draw(){
    background(0);
    sun.draw();
    x1.draw();
    // console.log(getForce(sun,x1, 1.49668992e+11));
}

function getForce(body1, body2,R){
    const G = 6.07*Math.pow(10,-11);
    let force = (G * body1.mass * body2.mass)/(R*R);
    return force;
}


class Star{
    constructor(mass, r){
        this.mass = mass;
        this.r = r;
        this.vr = r/factor;
    }
    draw(){
        fill(255,255,0);
        circle(width/2, height/2, 2*this.vr);
    }
}

class Planet{
    constructor(mass, r){
        this.mass = mass;
        this.r = r;
        this.vr = r/factor;
        this.f = 0;
        this.x = 1.49668992e+11/factor;
        this.y = 0;
    }

    draw(){
        fill(255);
        noStroke();
        this.F = getForce(sun,x1, 1.49668992e+11)/(factor*factor*(factor/2));
        console.log(this.F);
        this.delx = (width/2)-this.x;
        this.delY = (height/2)-this.y;
        this.distance = Math.sqrt((this.delx)*(this.delx) + (this.delY)*(this.delY));
        this.theta = Math.atan2(this.delx, this.delY);
        this.x = cos(this.theta)*this.F;
        this.y = sin(this.theta)*this.F;
        circle(this.x,this.y ,50);
        // circle(cos(this.theta)*this.F, sin(this.theta)*this.F,2*this.vr);
    }
}