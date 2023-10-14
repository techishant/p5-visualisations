let lens = {"pos": 0, "focus": 50};
let object = {"pos": -20, "size": 14};
let image = {"pos": -20, "size": 14};

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(0);
    translate(width/2, height/2);
    scale(1,-1);
    stroke(255);
    strokeWeight(1);
    line(-width/2, 0, width/2, 0);
    object.pos = map(mouseX, 0, width, -width/2, width/2);
    if(Math.abs(-width/2 - object.pos) < 10) object.pos = -width/2;
    image.pos = getV();
    image.size = getI();

    
    
    //drawing lens
    strokeWeight(1);
    line(lens.pos, 50, lens.pos, -50);

    // drawing object
    strokeWeight(1);
    line(object.pos, 0,object.pos, object.size)

    // drawing image
    stroke(0, 255,0)
    strokeWeight(1);
    line(image.pos, 0,image.pos, image.size)

    // drawing guide
    stroke(150)
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


    stroke(255,0,0)
    strokeWeight(3)
    point(lens.focus, 0)
    point(lens.focus*2, 0)
    point(-lens.focus, 0 )
    point(-lens.focus*2, 0)
}

function getV(){
    let v = (lens.focus*object.pos)/(object.pos + lens.focus);
    if(v==-Infinity) v = 999999999999999;
    console.log(object.pos + "     " +  v)
    return v;
}

function getI(){
    I = image.pos/object.pos * object.size;
    return I;
}