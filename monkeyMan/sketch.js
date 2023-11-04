let arr = [];
let arrowSize = 45;
let mX;
let mY;
function setup(){
    createCanvas(700,700); 
    for(i = -height/2-50; i<height/2+50; i+= width/50){
	   for(j = -width/2-50; j<height/2+50; j+= height/50){
		  arr.push(new Pointer(i,j));
	   }
    }
}

function draw(){
    background(0);
    translate(width/2, height/2);
    scale(1,-1);

    mX = mouseX - width/2;
    mY = -mouseY + height/2;
    for(i = 0; i<arr.length;i++){
	   arr[i].draw();
    }
    
}

function arrow(x1,y1,x2,y2){
    stroke(255,0,0);
    strokeWeight(2);
    line(x1,y1,x2,y2);
    fill(255,0,0);
    strokeWeight(4);
    point(x2,y2);
}

function arrow(x1,y1,x2,y2, dis){
    stroke(map(dis, 0, width/2 * width/2, 0, 255), 0 , 0);
    // stroke(map(dis, 0, width/2 * width/2, 255, 0), 0 , 0);
    //strokeWeight(2);
    //line(x1,y1,x2,y2);
    //fill(255,0,0);
    strokeWeight(4);
    point(x2,y2);
}


class Pointer{
    constructor(x,y){
	   this.x = x;
	   this.y = y;
    }
    draw(){
	   let xDir = mX - this.x;
	   let yDir = mY - this.y;
	   let theta = atan2(yDir, xDir);
	   let dis =	(mX   - this.x)   *	 (mX   - this.x)	 +
				(mY/2 - this.y)   *	 (mY - this.y);
	   arrow(this.x,this.y,this.x + cos(theta) * arrowSize,this.y +  sin(theta)*arrowSize, dis);
    }
}
