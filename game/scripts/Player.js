function drawPlayer(width, height, image, x,y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = image;
    this.update = function () {
        let panel = gameArea.context;
        panel.drawImage(this.image, this.x,this.y,this.width,this.height);
    }
    this.movePlayer = function (stepX, stepY){
        if (this.x + stepX >= 0 && this.y + stepY >= 0 && this.x + this.width + stepX <= gameArea.canvas.width && this.y + this.height + stepY <= gameArea.canvas.height - defaultHeightOfPlayer) {
            this.x += stepX;
            this.y += stepY;
        }
    }
}