function drawObstacle(x,y,width,height,image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = image;
    this.update = function (){
        let panel = gameArea.context;
        panel.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
    this.move = function (stepX, stepY){
        this.x += stepX;
        this.y += stepY;
        this.update();
    }
    this.check = function() {
        return this.x < 0;
    }
}
