function drawObstacle(x,y,width,height,color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.update = function (){
        let panel = gameArea.context;
        panel.fillStyle = color;
        panel.fillRect(this.x,this.y,this.width,this.height);
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
