let undergrounds= [];
let amountOfUndergrounds = 8;

function initialUndergrounds(){
    for(let i = 0; i < amountOfUndergrounds; i++){
        undergrounds.push(new underground(300,120,"styles/textures/textures_ground.png",  i * 300,800))
    }
}
function moveUndergrounds(){
    for(let i = 0; i < amountOfUndergrounds; i++){
        undergrounds[i].newPos();
        undergrounds[i].update();
    }
}