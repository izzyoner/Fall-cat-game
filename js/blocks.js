class blocks {
    constructor(x,y,width, height){
        this.x = x;
        this.y = y; 
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


}