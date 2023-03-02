let hearts = [];
let amount = 5;
let startPosX = 10;
let startPosY = 10;
let distance = 20;
let width = 50;
let height = 35;
let path = "styles/textures/heart.png";

function initialHearts(){
    for(let i = 0; i < amount;i++){
        hearts[i] = new heart(width,height,path,startPosX + i* (width + distance), startPosY);
    }
}
function drawHearts(){
    for(let i = 0; i < amount; i++){
        hearts[i].update();
    }
}

function damageDetected(){
    amount--;
    if(amount<1){
        gameOver=true;
    }
}