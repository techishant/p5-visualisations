let radiusSlider;
function setup(){
    createCanvas(600, 600);
    radiusSlider = createSlider(0,30);
}

let xcor, ycor;
let r = 20; 
function draw(){
    background(0);
    stroke(180);
    noFill();
    for(i = 0; i<=height; i+=10){
        for(j = 0; j<=width; j+=10){
            if(Math.abs(width/2-j) <1 || Math.abs(height/2-i)<1){
                stroke(255,0,0);
            }else{
                stroke(180);
            }
            rect(j,i,10);
        }
    }
    translate(width/2, height/2);
    scale(1,-1);

    

    r = radiusSlider.value()*10;   
    for(i = 0; i<=360; i+=1){
        xCor = Math.floor(r*cos(radians(i)));
        yCor = Math.floor(r*sin(radians(i)));
        // xCor = Math.floor(r*cos(i));
        // yCor = Math.floor(r*sin(i));
        deltaX = Math.abs(xCor%10);
        deltaY = Math.abs(yCor%10);
        if(xCor > 0){
            if(deltaX <5)   xCor = xCor-(deltaX);
            else            xCor = xCor + (10-deltaX); 
        }else{
            if(deltaX <5)   xCor = xCor+(deltaX);
            else            xCor = xCor -(10-deltaX); 
        }

        if(yCor>0){
            if(deltaY <5)   yCor = yCor-(deltaY);
            else            yCor = yCor + (10-deltaY);        
        }else{
            if(deltaY <5)   yCor = yCor+(deltaY);
            else            yCor = yCor - (10-deltaY);        
        }

        stroke(0);
        // noStroke();
        fill(255);
        // noFill();
        
        rect(xCor,yCor,10);
    }
}