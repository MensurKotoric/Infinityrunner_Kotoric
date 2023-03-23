class ManageHearts {
    constructor(amount,startPosX,startPosY, distanceBetween, width, height, game) {
        this.hearts = [];
        this.amount = amount;
        this.startPosX = startPosX;
        this.startPosY = startPosY;
        this.distanceBetween = distanceBetween;
        this.width = width;
        this.height = height;
        this.game = game;
    }
    initialHearts() {
        for(let i = 0; i < this.amount; i++){
            this.hearts[i] = new StandardObject(this.startPosX + i * (this.width + this.distanceBetween), this.startPosY,this.width,this.height,'heart',this.game);
        }
    }
    drawHearts(){
        for(let i = 0; i < this.amount; i++){
            this.hearts[i].update();
        }
    }
    damageDetected() {
        this.amount--;
        if(this.amount < 1){
            this.game.gameOver = true;
            if(this.game.score.currentScore >= localStorage.getItem('highScore')){
                localStorage.setItem('highScore', this.game.score.currentScore);
            }
        }
    }
}