class ManageHearts {
    constructor(amount,startPosX, startPosY,distance, width, height, path) {
        this.hearts = [];
        this.amount = amount;
        this.startPosX = startPosX;
        this.startPosY = startPosY;
        this.distance = distance;
        this.width = width;
        this.height = height;
        this.path = path;
    }
    initialHearts() {
        for(let i = 0; i < this.amount; i++){
            this.hearts[i] = new Heart(this.width,this.height,this.path,this.startPosX + i * (this.width + this.distance), this.startPosY);
        }
    }
    drawHearts() {
        for(let i = 0; i < this.amount; i++){
            this.hearts[i].update();
        }
    }
    damageDetected() {
        this.amount--;
        if(this.amount < 1){
            gameOver = true;
        }
    }
}