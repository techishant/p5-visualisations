let R;
let S1; 
let pointX, pointY;
let ballX, ballY;
let K_Slider;
function setup(){
    createCanvas(600,600);
    R = width/(5*2);
    S1 = createSlider(0, 360);
    K_Slider = createSlider(0,100, 0);
}

function draw(){
    background(0);
    translate(width/2, height/2);
    scale(1,-1);

    stroke(100);
    strokeWeight(1);
    line(width/2, 0, -width/2, 0);
    line(0, height/2, 0, -height/2);
    noFill();
    stroke(255);

    circle(0,0,R*2);
    pointX = cos(radians(S1.value()))*2*R;
    pointY = sin(radians(S1.value()))*2*R;

    ballX = pointX  + cos(radians(S1.value()*2))*R;
    ballY = pointY  + sin(radians(S1.value()*2))*R;
    circle(pointX, pointY, R*2);

    stroke(0,255,0);
    strokeWeight(6);
    point(ballX, ballY);
    stroke(255,0,0);
    strokeWeight(2);
    for(ang = 0; ang <= 360; ang++){
        let traceX = cos(radians(ang)+K_Slider.value()/10)*2*R;
        let traceY = sin(radians(ang))*2*R;
        point(traceX  + cos(radians(ang*2))*R, traceY  + sin(radians(ang*2))*R);
    }
}