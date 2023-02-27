class Player {
    /**
     * This Method is used to create an object of the player
     * @param width width of the player
     * @param height height of the player
     * @param image image path of the player
     * @param x x coordinate of the player
     * @param y y coordinate of the player
     */
    constructor(width, height, image, x, y) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = image;
    }
    /**
     * This Method draw the player
     */
    update() {
        let panel = gameArea.context;
        panel.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    /**
     * This Method move the player by incrementing the x and y coordinate
     * @param stepX relative value of the x coordinate, how much to move right or left
     * @param stepY relative value of the y coordinate, how much to move up or down
     */
    move(stepX, stepY) {
        if (this.x + stepX >= 0 && this.y + stepX >= 0 && this.x + this.width + stepX <= gameArea.canvas.width && this.height + stepY <= gameArea.canvas.height - defaultHeightOfPlayer) {
            this.x += stepX;
            this.y += stepY;
        }
    }
}