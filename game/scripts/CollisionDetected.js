function detectCollisions(){
    for(let i = 0; i < obstacles.length; i++){
        if(checkCollision(player.x,player.y,player.size,player.size,obstacles[i].x,obstacles[i].y,obstacles[i].size,obstacles[i].size)){
            genObstacleRandom(i, 600);
        }
    }
}

function checkCollision(o1X,o1Y,w1,h1,o2X,o2Y,w2,h2){
    return checkPoint(o1X,o1Y,o2X,o2Y,w2,h2) ||
        checkPoint(o1X + w1,o1Y,o2X,o2Y,w2,h2) ||
        checkPoint(o1X,o1Y + h1,o2X,o2Y,w2,h2) ||
        checkPoint(o1X + w1,o1Y + h1,o2X,o2Y,w2,h2);
}

function checkPoint(pX, pY, oX,oY,w,h){
    return pX >= oX && pX <= oX + w && pY >= oY && pY <= oY + h;
}