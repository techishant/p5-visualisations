class Ray{
    constructor(x1,y1,ang){
        this.ang  = ang;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = Math.cos(ang)*600;
        this.y2 = Math.sin(ang)*600;
        this.x_ = this.x2;
        this.y_ = this.y2;
    }
    

    mousePos(){
        this.x1 = mouseX-width/2;
        this.y1 = -(mouseY-height/2);
    }

    cast(x3,y3,x4,y4){
        let d = (this.x1 - this.x2) * (y3-y4) - (this.y1 - this.y2) * (x3-x4)
        if(d == 0) return;

        let u = (this.x1 - x3) * (this.y1 - this.y2) - (this.y1 - y3) * (this.x1 - this.x2) /d;
        let t = (this.x1 - x3) * (y3 - y4) - (this.y1 - y3) * (x3 - x4) /d;
        
        if(0<=u && u<=1){
            console.log("intersection")
        }
    }
    
    drawShape(){
        
        line(this.x1,this.y1,this.x2,this.y2);
    }
}


