let frameCounter = 0;
let currentScore = 0;
let highScore = 0;

function showScore(){
    frameCounter++;
    // increase timer every second (50Hz --> %50)
    if(frameCounter%50 == 0){
        currentScore++;
    }
    scoreObj.text = "Score: " + currentScore;
    if(currentScore >= highScore){
        highScore = currentScore;
    }
    scoreObj.update();
}
