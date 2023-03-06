class ManageScore{
    constructor() {
        this.frameCounter = 0;
        this.currentScore = 0;
    }
    showScore(){
        this.frameCounter++;
        if(this.frameCounter % 60 == 0){
            this.currentScore++;
        }
        scoreObj.text = "Score: " + this.currentScore;
        if(this.currentScore >= localStorage.getItem('highScore')){
            localStorage.setItem('highScore', this.currentScore);
        }
        scoreObj.update();
    }
}
