let gameOver = false;
function drawGameOverScreen() {
    let ctx = gameArea.context;
    ctx.fillStyle = "white";
    ctx.font = "180px Stencil";
    ctx.fillText("Game Over !!!", gameArea.canvas.width / 2 - 2 * gameArea.canvas.width / 7, gameArea.canvas.height / 2 - 200);
    ctx.font = "120px Brush Script MT";
    ctx.fillText("HighScore: ", gameArea.canvas.width / 2 - gameArea.canvas.width / 6, gameArea.canvas.height / 2);
    ctx.fillStyle = "green";
    ctx.strokeStyle = "white";
    roundRect(ctx, gameArea.canvas.width / 2 - 225, gameArea.canvas.height - 300, 450, 200, 50, true);
    roundRect(ctx, gameArea.canvas.width / 2 - 225, gameArea.canvas.height - 300, 450, 200, 50, false);
    ctx.font = "72px Brush Script MT";
    ctx.fillStyle = "white";
    ctx.fillText("New Game" , gameArea.canvas.width / 2 - 120, gameArea.canvas.height - 180);
}

function roundRect(ctx, x, y, width, height, radius, fill) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}
function newGameButtonClicked(){
    let posX = 0;
    let posY = 0;
    document.onclick = function (event) {
        posX = event.clientX;
        posY = event.clientY;
        if(checkClick(posX,posY,gameArea.canvas.width / 2 - 225,gameArea.canvas.height - 300, 450,200)){
            document.location.reload();
        }
    }
}
function checkClick(pX,pY,rX,rY,w,h){
    return pX >= rX && pX <= rX + w && pY >= rY && pY <= rY + h;
}