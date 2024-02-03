let arr;
let cellWidth =5;
let rule = 178;
let y = 0;
let genCol;
let slider;
let isSliderCreated = false;


function setup(){
  // createCanvas(window.innerWidth,window.innerHeight);
  createCanvas(615,615);
  background(255);
  let n = floor(width/cellWidth);
  arr = new Array(n).fill(0);

  if(!isSliderCreated){
    slider = createSlider(0,255);
    slider.elt.addEventListener('change', ()=>{
      resetPattern(slider.value())
    }); 
  }

  isSliderCreated = true;
  
  genCol = Array(n).fill(0).map(x => Array(3).fill(0))
  arr[parseInt(n/2)+1] = 1;
  // console.table(arr);
  // console.log(genCol)
  drawAtOnce()
}

function draw(){
  // if(y < height) {
  //   drawGeneration();
  // }
}

function drawAtOnce(){
  while(y < height) {
    drawGeneration();
  }
}

function drawGeneration(){
  for(let i = 0; i<arr.length; i++){
    // fill(255 - arr[i]*255, random()*255, random()*255);
    // fill(255 - arr[i]*255);
    // console.log(genCol);
    fill(genCol[i][0], genCol[i][1], genCol[i][2]);  
    noStroke();
    rect(i*cellWidth, y, cellWidth);
  }
  y+= cellWidth;
  arr = nextGeneration();
}


function nextGeneration(){
  let nextGen = [];

  nextGen[0] = arr[0];
  nextGen[arr.length-1] = arr[arr.length-1];
  for(let i = 1; i<arr.length-1; i++){
    let left, right;

    // if(i == 0) left = arr[arr.length-1];
    // else left = arr[i-1];
    left = arr[i-1]

    let middle = arr[i];

    // if(i == arr.length-1) right = arr[0];
    // else right = arr[i+1]
    right = arr[i+1]

    nextState = calculateState(left, middle, right);
    nextGen[i] = nextState[0];
    genCol[i] = nextState[1];
  }
  // console.log(genCol)
  return nextGen;
}

function nextGeneration2(){
  let nextGen = [];

  nextGen[0] = arr[0];
  nextGen[arr.length-1] = arr[arr.length-1];
  for(let i = 0; i<arr.length; i++){
    let left, right;

    if(i == 0) left = arr[arr.length-1];
    else left = arr[i-1];
    // left = arr[i-1]

    let middle = arr[i];

    if(i == arr.length-1) right = arr[0];
    else right = arr[i+1]
    // right = arr[i+1]

    nextState = calculateState(left, middle, right);
    nextGen[i] = nextState[0];
    genCol[i] = nextState[1];
    
  }
  return nextGen;
}

function calculateState(a, b, c){
  let str = ("00000000"+rule.toString(2)).slice(-8);
  let stateString = ""+a+b+c;
  let stateNumber = 7-parseInt(stateString, 2);
  let currentState = Number(str.charAt(stateNumber));
  let colours = [[2, 2, 2], [195, 0, 255], [0, 38, 65], [0, 255, 21], [179, 255, 0], [255, 0, 55], [255, 136, 0], [255, 255, 255]];
  return [currentState, colours[stateNumber]];
}

function resetPattern(k){
  rule = k;
  y = 0;
  background(255);
  setup();
}
