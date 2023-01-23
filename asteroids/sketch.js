function setup(){
    createCanvas(400, 400);
    z = createSlider(1, 1000);
}
let preVal;
function draw(){
    background(0);
    translate(width/2, height/2)
    scale(1,-1)
    stroke(255)
    let val = z.value()/1000;
    noFill();
    beginShape();
    for(i = 0; i<=44/7; i+=val){
        r = random(50, 100);
        x = Math.cos(i) * r;
        y = Math.sin(i) * r;
        vertex(x, y);
    }
    endShape(CLOSE);
    preVal = val;
    frameRate(1)
}