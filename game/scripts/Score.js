function score(width, height,color,x,y,type){
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        let panel = gameArea.context;
        if (this.type == "text") {
            panel.font = this.width + " " + this.height;
            panel.fillStyle = color;
            panel.fillText(this.text, this.x, this.y);
        }
    }
}