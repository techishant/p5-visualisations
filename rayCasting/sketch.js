rayList = [];


function setup(){
    createCanvas(600, 600)
    a = createSlider(0, 360)
    translate(width/2, height/2);
    scale(1,-1);
    
    x3 = 0; y3 = 0;
    x1 = 250; y1 = 250;
    x2 = 250; y2 = -250;

    rayPoint = new createVector(0,0);
    // for(i = 0; i<= TWO_PI; i+= 0.1){
    //     rayList.push(new Ray(rayPoint.x,rayPoint.y,i));
    // }
}


function draw(){
    strokeWeight(2)
    background(0);
    translate(width/2, height/2);
    scale(1,-1);
    stroke(255);
    
    x3 = 90;
    y3 = 34;
    x4 = mouseX-width/2;
    y4 = -(mouseY-height/2);
    line(x1,y1,x2,y2);
    strokeWeight(5)
    point(x4, y4)
    strokeWeight(2)
    line(x3,y3,x4,y4);
    
    for(ray of rayList){
        ray.mousePos();
        ray.cast(x1,y1,x2,y2);
        ray.drawShape();
    }
    

    d = (x1-x2) * (y3-y4) - (y1-y2) * (x3 - x4);
    if(d != 0)
    {
        t = ((x1-x3) * (y3-y4) - (y1-y3)*(x3-x4)) / d;
        u = ((x1-x3) * (y1-y2) - (y1-y3)*(x1-x2)) / d;
        
        
        if(t > 0 && t < 1 && u > 0){
            x_ = x3 + u*(x4 - x3)
            y_ = y3 + u*(y4 - y3)
            stroke(255,0,0)
            strokeWeight(15)
            // line(x3,y3,x_,y_)
            point(x_, y_)
        }
    }
}


// px = ((x1*y2 - y1*x2) * (x3 - x4) - (x1 - x2)*(x3*y4 - y3*x4))/((x1-x2)*(y3-y4) - (y1-y2)*(x3-x4));
// py = ((x1*y2 - y1*x2) * (y3 - y4) - (y1 - y2)*(x3*y4 - y3*x4))/((x1-x2)*(y3-y4) - (y1-y2)*(x3-x4));

// y4 = Math.sin(radians(a.value())) * 100;
// x4 = Math.cos(radians(a.value())) * 100;