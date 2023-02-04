let frameCounter = 0;
let currentScore = 0;

function showScore(){
    frameCounter++;
    // increase timer every second (50Hz --> %50)
    if(frameCounter%50 == 0){
        currentScore++;
    }
    scoreObj.text = "Score: " + currentScore;
    if(currentScore >= localStorage.getItem('highScore')){
        localStorage.setItem('highScore', currentScore);
        //window.alert(localStorage.getItem('highScore'));
    }
    scoreObj.update();
}
