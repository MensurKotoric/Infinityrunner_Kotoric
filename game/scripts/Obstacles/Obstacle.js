/**
 * This Method is used to create an object of an obstacle
 * @param x x coordinate of the obstacle
 * @param y y coordinate of the obstacle
 * @param width width of the obstacle
 * @param height height of the obstacle
 * @param image image path of the obstacle
 */
function ObstacleObject(x,y,width,height,image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    /**
     * This Method draw the obstacle
     */
    this.update = function (){
        let panel = gameArea.context;
        panel.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    /**
     * This Method move the obstacle by incrementing the x and y coordinate.
     * @param stepX relative value of the x coordinate, how much to move right or left
     * @param stepY relative value of the y coordinate, how much to move up or down
     */
    this.move = function (stepX, stepY){
        this.x += stepX;
        this.y += stepY;
        this.update();
    }
    /**
     * This Method check if the obstacle is out of the screen on the left site
     * @returns {boolean}
     */
    this.check = function() {
        return this.x < 0;
    }
}