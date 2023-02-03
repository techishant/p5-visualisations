let lineVec;
function setup(){
    createCanvas(300, 300)
    lineVec = createVector(150,150);
}
function draw(){
    background(0)
    translate(width/2, height/2)
    scale(1,-1)
    stroke(255)
    lineVec.normalize()
    lineVec.magnitude(200)
    line(0,0, lineVec.x, lineVec.y)
}