let img;
let angleSlider;
let angle;
function preload(){
  img = loadImage("img/name.png");
  angleSlider = createSlider(0,360);
  angle = angleSlider.value();
}
function rot(theta, x, y, cacheCos, cacheSin){
  // theta = radians(theta);
  let delX = x * cacheCos - y * cacheSin;
  let delY = x * cacheSin + y * cacheCos;
  return [delX, delY];
}

let i;
let d;
let j;
function setup(){
  createCanvas(500,500);
  img.loadPixels();
  // image(img,width/2, height/2);
  
}

function draw(){
  translate(width/2, height/2);
  scale(1,-1);
  background(255,0,0)
  loadPixels();
  strokeWeight(1);
  stroke(0,255,0)
  point(0,0)
  angle = angleSlider.value();
  cacheCos = cos(radians(angleSlider.value()));
  cacheSin = sin(radians(angleSlider.value()));
  for(y = 0; y<img.height; y++){
    for(x =0; x<img.width; x++){
      i = (x+y*img.width)*4;
      stroke(img.pixels[i], img.pixels[i+1], img.pixels[i+2]);
      let v = rot(angle, x, y, cacheCos, cacheSin);
      point(v[0],-v[1]);
    }
  }
}