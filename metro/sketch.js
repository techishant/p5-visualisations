var thetaSlider;
function setup(){
    createCanvas(600, 600);
    thetaSlider = createSlider(0, 360);
}
var i = 0;

var theta = 0;
var radius = 200;
function draw(){
    theta = radians(thetaSlider.value()); 
    background("#ffc0cb");
    translate(width/2, height/2);
    scale(1,-1);

    if(i>TWO_PI) i =0; // repeating the animation

    stroke(255);
    strokeWeight(2);
    circle(0, 0, radius*2+30);
    noFill();
    circle(0, 0, radius*2-90);
    strokeWeight(30);
    stroke(255,0,0);    
    tmpSinValue = sin(i);    
    stroke(0,255,0);    
    for(ang = 0; ang<=TWO_PI; ang+=TWO_PI/thetaSlider.value()){
        point(sin(ang) * tmpSinValue * radius, cos(ang)*tmpSinValue*radius); // sin(0) * sin(i) * r, cos(0) * sin(i) * r
    }
    i+=0.02;
}