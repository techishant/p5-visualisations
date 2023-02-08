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
        let d = (x3-x4) * (this.y1-this.y2) - (y3-y4) * (this.x1 - this.x2);
        let t,u;
        if(d != 0)
        {
            t = ((x3-this.x1) * (this.y1-this.y2) - (y3-this.y1)*(this.x1-this.x2)) / d;
            u = ((x3-this.x1) * (y3-y4) - (y3-this.y1)*(x3-x4)) / d;
            
            
            if(t > 0 && t < 1 && u > 0){
                this.x2 = this.x1 + u*(this.x2 - this.x1)
                this.y2 = this.y1 + u*(this.y2 - this.y1)
                return;
            }else{
                this.x2 = this.x_;
                this.y2 = this.y_;
            }
        }        
        this.x2 = this.x_;
        this.y2 = this.y_;
    }

    drawShape(){
        line(this.x1,this.y1,this.x2,this.y2);
    }
}


