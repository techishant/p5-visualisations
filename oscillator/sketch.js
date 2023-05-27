function setup(){
    // createCanvas(windowWidth, windowHeight)
    createCanvas(900, 600)
    osc = new p5.Oscillator('sine');
    osc.start()
    f = createSlider(1, 22050,1);
    a = createSlider(1,50);
}

function draw(){
    background(0);
    osc.freq(f.value());
    osc.amp(a.value());
    stroke(255);
    textSize(50);
    text(f.value() + "",100,100)
}