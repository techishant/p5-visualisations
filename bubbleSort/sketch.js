let i,j; // main Counter variables for sorting loop
let arr = []; // arr to be sorted
let showSwap; // turns true if swapping is possible
let UpperBound; // upperbound of randomly genrating values
let nos; // number of values in arr
let next; // turns true if program is ready to render next iter
let sorted = false; // turns true if the arr is sorted
let autorun; // if turned true, there's no need to click 
let resetBtn; // if clicked a new animation will start with new set of random character
let fpsSlider; // fps slider if autorun is on
let nosInp; // takes nos for input

let firstClick = false; // fixes a bug temporarily ie. if reset is clicked, it automaticaly moves to the first iteration
function setup(){
    createCanvas(600,600);
    i =0;j = 0;
    autorun = createCheckbox("Autorun");
    resetBtn = createButton("Reset");
    fpsSlider = createSlider(0,60);
    resetBtn.elt.addEventListener("click", resetAnim);
    nosInp = createInput("12");
    showSwap = false;
    UpperBound = 99;
    sorted = false;
    next = false;
    nos = 12;
    intitializeArr();   
}

/**
 * Resets the animation by changing the values to default and intializing arr with new set of random arr
 */
function resetAnim(){
    nos = parseInt(nosInp.value())
    intitializeArr();
    i = 0;
    j = 0;
    firstClick = true;
    sorted = false;
}

function intitializeArr(){
    arr = [];
    for(k = 0; k<nos; k++){
        arr[k] = (int)(Math.random()*UpperBound+1);
    }
}
function draw(){
    background(255);
    if(autorun.checked()) next = true // if autorun turned on automatically turn to next Move
    
    if(i>= arr.length-1){
        i = 0;
        // i = 0; i<arr.length-1
        sorted = true; // obvious that if the loop has ended the arr is sorted
        console.log(arr)
    }
    if(j>=arr.length-1-i){
        i++; // if one iteration from the inner loop has ended the next iteration of outer loop will start
        j=0;
    }
    
    if(next)
    {

    // swapping values
    if(arr[j+1]<arr[j]){
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
        showSwap = true; // this will help in animating and showing some info
    }else{
        showSwap = false;
    }

    
    if(!showSwap)j++; // if theres some swapping to show then this increment can wait for a frame
    next = false; // this move has ended, getting ready for new move
    }

    // finally diaplaying something to screen 
    drawArr(arr);

    // tweaking framerate
    // note: frame rate can only be changed if its autorun mode
    if(autorun.checked()){
        frameRate(fpsSlider.value());
    }else{
        frameRate(60);
    }
}

function mouseClicked(){

    // the bug discussed earlier
    if(firstClick) firstClick = false;
    else next = true; // if mouse clicked move to next 
}



function drawArr(arr){
    s = width/arr.length;
    stroke(0);
    for(k = 0; k<arr.length; k++){
        stroke(0);
        strokeWeight(1);
        // those grids
        fill(map(arr[k], 0, UpperBound, 255, 0));
        rect(s*k, width/2, s);
        // Text 
        if(nos<26){
            if(nos>15) textSize(13)
            else textSize(20);
            stroke(255,0,0);
            // red ones
            fill(255, 0 ,0);
            text(`${arr[k]}`, s*k + s/2 - 4, width/2 + s/2 + 4);
            // grey ones
            stroke(180);
            fill(180);
            text(`${k}`, s*k + s/2 - 4, width/2-s/1.4 + s/2 + 4);
            text(`i = ${i}`, 20, s);
            text(`j = ${j}`, 20, 2*s);
            // swap 
            if (showSwap && k == j){
                text("Swap", s*k + s/2, width/2 + 1.4*s)
            }
            strokeWeight(4); // STROKEWEIGHT FOR SELECTORS
        }else{
            strokeWeight(2); // STROKEWEIGHT FOR SELECTORS
        }
        
        // selectors
        if(!sorted){
            noFill();
            stroke(0,0,255)
            rect((arr.length-1-i)*s, width/2, (i+1)*s, s)
            stroke(0,255,0);
            rect(j*s, width/2, 2*s, s);
        }

    }
}