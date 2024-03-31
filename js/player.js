class player{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.fillStyle = "#0095DD";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}