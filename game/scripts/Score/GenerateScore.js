let frameCounter = 0;
let currentScore = 0;

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
