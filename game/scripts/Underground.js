function underground(width, height, path, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = -speedOfObstacles;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = path;
    this.update = function () {
        let ctx = gameArea.context;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
    this.newPos = function () {
        this.speedX = -speedOfObstacles;
        this.x += this.speedX;
        //this.y += this.speedY;
        if (this.x <= -this.width) {
            this.x = amountOfUndergrounds * this.width - this.width;
        }
    }
}