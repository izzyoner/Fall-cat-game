class sprite{
    constructor({position,imageSrc}){
        this.position =position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
    }

    draw(){
        ctx.drawImage(this.image, this.position.x, this.position.y,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
    }
}