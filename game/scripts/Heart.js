function heart(width, height, path, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = path;
    this.update = function () {
        let ctx = gameArea.context;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}