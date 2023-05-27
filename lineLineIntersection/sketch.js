function setup(){
    createCanvas(600, 600)
    a = createSlider(0, 360)
    
    
    x3 = 0; y3 = 0;
    x1 = 250; y1 = 250;
    x2 = 220; y2 = -120;
}
function draw(){
    strokeWeight(2)
    background(0);
    translate(width/2, height/2);
    scale(1,-1);
    stroke(255);
    
    x3 = 0; y3 = 0;
    x4 = mouseX-width/2; y4 = -(mouseY-height/2);
    line(x1,y1,x2,y2);
    a1 = y2-y1;
    b1= x1-x2;
    c1= a1*x1+b1*y1;
    strokeWeight(5)
    point(x4, y4)
    strokeWeight(2)
    line(x3,y3,x4,y4);
    a2 = y4-y3;
    b2= x3-x4;
    c2= a2*x3+b2*y3;

    // logic
    den = a1*b2-a2*b1;
    x = (b2*c1-b1*c2)/den;
    y = (a1*c2-a2*c1)/den;
    stroke(255,0,0)
    strokeWeight(10);
    point(x,y);
    console.log(den);
}


// px = ((x1*y2 - y1*x2) * (x3 - x4) - (x1 - x2)*(x3*y4 - y3*x4))/((x1-x2)*(y3-y4) - (y1-y2)*(x3-x4));
// py = ((x1*y2 - y1*x2) * (y3 - y4) - (y1 - y2)*(x3*y4 - y3*x4))/((x1-x2)*(y3-y4) - (y1-y2)*(x3-x4));

// y4 = Math.sin(radians(a.value())) * 100;
// x4 = Math.cos(radians(a.value())) * 100;