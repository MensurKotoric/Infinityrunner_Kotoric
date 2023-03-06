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
/*
function showScore(){
    frameCounter++;
    // increase score every second (60Hz --> %60)
    if(frameCounter%60 == 0){
        currentScore++;
    }
    scoreObj.text = "Score: " + currentScore;
    if(currentScore >= localStorage.getItem('highScore')){
        localStorage.setItem('highScore', currentScore);
    }
    scoreObj.update();
}
 */
