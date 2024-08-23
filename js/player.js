class player{
    constructor(x,y,width,height,vx,vy){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.vx = vx;
        this.vy = vy;
    }

    draw() {
        ctx.fillStyle = "#0095DD";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}