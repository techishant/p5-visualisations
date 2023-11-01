var thetaSlider;
let big_circle;
let small_circle;
function setup(){
    createCanvas(600, 600);
    thetaSlider = createSlider(0, 20);
    big_circle = new Circle(0, 0, 200, 0, 0);
    small_circle = new Circle(0, 0, 100, 0, 10);
}

function draw(){
    background(255);
    translate(width/2, height/2);
    scale(1,-1);
    stroke(0);

    strokeWeight(1);
    line(0, height/2, 0, -height/2);
    line(width/2, 0, -width/2, 0);

    big_circle.draw();
    big_circle.drawPoints();
    big_circle.rotate();
    big_circle.drawRefPoints(small_circle);

    
    // small_circle.draw();
    small_circle.rotate();
    small_circle.drawPoints();
    small_circle.setBullets(parseInt(thetaSlider.value()));
}

class Circle{
    constructor(x, y, r, ang, bullets){
	   this.x = x;
	   this.y = y;
	   this.r = r;
	   this.ang = ang;
	   this.bullets = bullets;
    }
    
    draw(){
        stroke(0);
	   strokeWeight(2);
	   noFill();
        circle(this.x,this.y,this.r*2);
    }

    setBullets(bullets){
	   this.bullets = bullets;
    }

    drawPoints(){
	   strokeWeight(10);
	   stroke(255,0,0);
	   if(this.bullets != 0)
	   for(let i = 0; i<360; i+=360/this.bullets){
		  let pointX = this.x + cos(radians(i + this.ang)) * this.r;
		  let pointY = this.y + sin(radians(i + this.ang)) * this.r;
		  point(pointX, pointY);
	   }
    }

    drawRefPoints(circle){
	   stroke(0,0,255);
	   //point(this.x, sin(radians(this.ang))*this.r);
	   //point(this.x, sin(radians(this.ang))*this.r);
	   //point(cos(radians(this.ang))*this.r, this.y);
	   circle.setCoorFromPoints(this.x, sin(radians(this.ang))*this.r,cos(radians(this.ang))*this.r, this.y);
    }

    setCoorFromPoints(x1, y1, x2, y2){
	   this.x = (x2-x1)/2;
	   this.y = (y2-y1)/2;
    }

    rotate(){
	   this.ang++;
	   if(this.ang>360) this.ang = 0;
    }

}
