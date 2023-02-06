function coll(n){
    collConjecture.push(n);
    if(n == 1){
        return;
    }else{
        DBVal = findInDB(n);
        if(DBVal != -999){
            collConjecture.push(DBVal);
            collConjecture = collConjecture.flat();
            return;
        }
        if(n%2 == 0){
            coll(n/2);
        }else{
            coll(3*n + 1);
        }
    }
}

function findInDB(n){
    for(let i=0; i<collDB.length-1; i++){
        for(let j=0; j<collDB[i].length; j++){
            if(collDB[i][j] == n){
                n = []
                j = j+1;
                while(true){
                    if(collDB[i][j] != 1){
                        n.push(collDB[i][j]);
                    }else{
                        n.push(1);
                        break;
                    }
                    j++;
                }
                n = n.flat();
                // console.log(n)
                return n;
                
            }
        }
    }
    return -999;
}

let collDB = []

function setup(){
    createCanvas(500, 500);
    radiiSlider = createSlider(1,width/2,width/2,1);
    numSlider = createSlider(1,10000);
}


function pol(ang){
    return [Math.cos(ang), Math.sin(ang)];
}


function draw(){
    document.getElementById("num").innerHTML = numSlider.value();
    r = radiiSlider.value();
    background(0);
    translate(width/2, height/2);
    scale(1,-1);
    noFill();
    stroke(255);
    strokeWeight(1)
    circle(0, 0, 2*r)
    
    beginShape();
    // for(j = 1; j<=numSlider.value(); j++){
    //     collConjecture = [];
    //     coll(j);
    //     collDB.push(collConjecture);
    //     maxNum = max(collConjecture);
    //     // console.log(maxNum);
    //     for (i = 0;i<collConjecture.length; i++){
    //         k = collConjecture[i]/maxNum * TWO_PI;
    //         polcor = pol(k);
    //         vertex(polcor[0]*r, polcor[1]*r);
    //     }
    // }
    collConjecture = []
    coll(numSlider.value());
    maxNum = max(collConjecture)
    for (let i = 0; i <collConjecture.length; i++) {
        k = collConjecture[i]/maxNum * TWO_PI;
        polcor = pol(k);
        vertex(polcor[0]*r, polcor[1]*r);
    }
    endShape();
    frameRate(24);
    // noLoop();
    // console.log("done");
}