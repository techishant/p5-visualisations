let lens = {"pos": 0, "focus": 50};
let object = {"pos": -20, "size": 14};
let image = {"pos": -20, "size": 14};
let focusSlider;
let objectSizeSlider;


function setup(){
    createCanvas(window.innerWidth,window.innerHeight-70);
    focusLabel = document.createElement(LABEL);
    focusLabel.innerText = "Focus: ";
    focusLabel.setAttribute("for", "focusSlider");
    document.body.appendChild(focusLabel);
    focusSlider = createSlider(-200, 200, 200, 10);
    focusSlider.elt.id = "focusSlider";


    objectSizeLabel = document.createElement(LABEL);
    objectSizeLabel.innerText = "\tu: ";
    objectSizeLabel.setAttribute("for", "objectSizeSlider");
    document.body.appendChild(objectSizeLabel);
    objectSizeSlider = createSlider(0,100, 100, 5);
}

function updateValues(){
    object.size = objectSizeSlider.value();
    lens.focus = focusSlider.value();
    if(mouseY<height)
    object.pos = map(mouseX, 0, width, -width/2, width/2);
    if(object.pos>0) object.pos = 1;
}
function displayInfo(){
    scale(1,-1);
    fill(255)
    strokeWeight(0);
    stroke(255);
    textSize(30);
    text(`f\t= ${parseInt(lens.focus/10)}`, -width/2 + 20, -height/2+30);
    // text(`u ${parseInt(object.pos/10)}`, -width/2 + 20, 40);

    if(object.pos > 9999999) 
    text(`u\t=  ${"Infinity"}`, -width/2 + 20, -height/2+60);
    else if(object.pos < -9999999)
    text(`u\t=  ${"-Infinity"}`, -width/2 + 20, -height/2+60);
    else
    text(`u\t=  ${parseInt(object.pos/10)}`, -width/2 + 20, -height/2+60);

    if(image.pos > 9999999) 
    text(`v\t=  ${"Infinity"}`, -width/2 + 20, -height/2+90);
    else if(image.pos < -9999999)
    text(`v\t=  ${"-Infinity"}`, -width/2 + 20, -height/2+90);
    else
    text(`v\t=  ${parseInt(image.pos/10)}`, -width/2 + 20, -height/2+90);

    if(image.size > 9999999) 
    text(`I\t=  ${"Infinity"}`, -width/2 + 20, -height/2+120);
    else if(image.size <-9999999)
    text(`I\t=  ${"-Infinity"}`, -width/2 + 20, -height/2+120);
    else
    text(`I\t=  ${parseInt(image.size/10)}`, -width/2 + 20, -height/2+120);

    text(`O\t=  ${parseInt(object.size/10)}`, -width/2 + 20, -height/2+150);
    scale(1,-1);
}

function draw(){
    background(0);
    translate(width/2, height/2);
    scale(1,-1);
    stroke(255);
    strokeWeight(1);
    line(-width/2, 0, width/2, 0);

    updateValues();

    if(Math.abs(-width/2 - object.pos) < 10) object.pos = -99999999;
    image.pos = getV();
    image.size = getI();

    
    // drawing markings
    stroke(255,0,0)
    strokeWeight(20)
    point(lens.focus, 0);
    point(lens.focus*2, 0)
    point(-lens.focus, 0 )
    point(-lens.focus*2, 0)
    stroke(255)
    strokeWeight(1)
    scale(1,-1);
    textSize(20);
    fill(255);
    text("F2", lens.focus, 40)
    text("2F2", 2*lens.focus, 40)
    text("F1", -lens.focus, 40)
    text("2F1", 2*-lens.focus, 40)
    scale(1,-1);
    
    //drawing lens
    strokeWeight(3);
    line(lens.pos, 100, lens.pos, -100);

    // drawing object
    strokeWeight(4);
    line(object.pos, 0,object.pos, object.size)

    // drawing image
    stroke(0, 255,0)
    strokeWeight(4);
    line(image.pos, 0,image.pos, image.size)

    // drawing guide
    stroke(150)
    strokeWeight(1);
    // object to lens
    line(object.pos, object.size, 0 , object.size)
    // lens to object + passing through focus
    stroke(60) 
    line(0 , object.size, lens.focus, 0);
    stroke(150)
    line(0 , object.size, image.pos, image.size);
    // object to image + passing through C
    stroke(60)
    line(object.pos, object.size, 0 , 0);
    stroke(150)
    line(object.pos, object.size, image.pos , image.size); 

    displayInfo()
    
}

function getV(){
    let v = (lens.focus*object.pos)/(object.pos + lens.focus);
    if(v==-Infinity) v = 999999999999999;
    // console.log(object.pos + "     " +  v)
    return v;
}

function getI(){
    I = image.pos/object.pos * object.size;
    return I;
}