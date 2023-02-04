let frameCounter = 0;
let timer = 0;

function showScore(){
    frameCounter++;
    // increase timer every second (50Hz --> %50)
    if(frameCounter%50 == 0){
        timer++;
    }
    scoreObj.text = "Score: " + timer;
    if(gameOver == true){
        timer = 0;
    }
    scoreObj.update();
}
/*
function resetScore(){
    if(gameOver == true){
        timer = 0;
    }
}

 */
