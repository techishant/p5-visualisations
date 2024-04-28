let A;
let B;
let C;

let color_list;
let saturation, lum;
let Mag_Sliders;
let info;
function setup(){
    createCanvas(400,400);
    A = createVector(30,50);
    B = createVector(100, 0);
    
    Mag_Sliders = {"A": createSlider(1,width/2), "B": createSlider(1,width/2)};
    
    info = document.createElement('textarea');
    document.body.append(info);

    // A_Mag_Slider = createSlider(1,width/2);
    color_list = {'A': random(1,255), 'B': random(1,255), 'C':random(1,255)};
    saturation = 80;
    lum = 50;
}

function draw(){
    colorMode(HSL);
    background(0);

    strokeWeight(0.2);
    stroke(255);
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
    strokeWeight(1);

    C = p5.Vector.add(A,B);

    updateVector(A, "A");

    theta = p5.Vector.angleBetween(A, B);
    alpha = p5.Vector.angleBetween(C, B);
    dp = A.mag() * B.mag() * cos(theta);
    cp = A.mag() * B.mag() * sin(theta);

    info.value = `
    |A|: ${Math.round(A.mag()*100)/100}
    |B|: ${Math.round(B.mag()*100)/100}
    |C|: ${Math.round(C.mag()*100)/100}
    -----------------
    theta: ${Math.round(theta*180/Math.PI*100)/100}
    alpha: ${Math.round(alpha*180/Math.PI*100)/100}
    -----------------
    A . B: ${Math.round(dp*100)/100}
    |A x B|: ${Math.round(cp*100)/100}
    `
    
    A.setMag(parseInt(Mag_Sliders["A"].value()));
    B.setMag(parseInt(Mag_Sliders["B"].value()));
    drawVector(A, "A");
    drawVector(C, "C");
    drawVector(B, "B");

    strokeWeight(0.6);
    stroke(170);
    line(width/2+A.x,height/2+A.y,width/2+C.x,height/2+C.y);
    line(width/2+B.x,height/2+B.y,width/2+C.x,height/2+C.y);
}

function updateVector(v){
    if(mouseY < 0 || mouseY > height || mouseX < 0 || mouseY > width ){
        return;
    }
    let m = v.mag();
    v.x = mouseX-width/2;
    v.y = mouseY-height/2;
    v.normalize();
    v.setMag(m);
}

function drawVector(v, s){
    strokeWeight(2);
    stroke(255);
    line(height/2,width/2,height/2 + v.x, width/2 + v.y);
    strokeWeight(map(v.mag(), 1, 400, 20,8));
    stroke(color_list[s], saturation, lum);
    point(width/2 + v.x, height/2 + v.y);

    // noFill();
    stroke(255);
    color(255);
    strokeWeight(4);
    text(s, width/2 + v.x, height/2 + v.y);
}

function drawRelativeVector(u, v, s){
    strokeWeight(2);
    stroke(255);
    line(u.x,u.y,v.x,v.y);
    strokeWeight(map(v.mag(), 1, 400, 20,8));
    stroke(color_list[s], saturation, lum);
    point(width/2 + v.x,height/2 + v.y);
}