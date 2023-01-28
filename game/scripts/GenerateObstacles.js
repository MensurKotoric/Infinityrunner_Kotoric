let amountOfObstacles = 3;
let obstacles = [];
const size = 50;
let heightOfObstacles = 0;
let speedOfObstacles = 4;
let counterOfObstacles = 0;
let distanceBetweenObstacles = 150;
function initialGenerate(offsetX) {
    let xArray = [];
    obstacles = [];
    heightOfObstacles = gameArea.canvas.height - size - defaultHeightOfPlayer;
    for (let i = 0; i < amountOfObstacles; i++) {
        let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
        let check = false;
        while (!check) {
            check = true;
            for (let j = 0; j < xArray.length; j++) {
                if (checkOverlapping(x, size, xArray[j], size)) {
                    check = false;
                    break;
                }
            }
            if (!check) {
                x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
            }
        }
        xArray.push(x);
    }
    for (let i = 0; i < amountOfObstacles; i++) {
        let imageSrc = "";
        let number = Math.round(Math.random() * 3) + 1;
        switch (number){
            case 1: imageSrc = "styles/textures/cactus.png"; break;
            case 2: imageSrc = "styles/textures/chest.png"; break;
            case 3: imageSrc = "styles/textures/stone.png"; break;
            case 4: imageSrc = "styles/textures/treeTrunk.png"; break;
        }
        obstacles.push(new drawObstacle(xArray[i], heightOfObstacles, size, size, imageSrc));
    }
}

function moveObstacles(stepX, stepY) {
    for (let i = 0; i < amountOfObstacles; i++) {
        if (obstacles[i].check()) {
            genObstacleRandom(i, 600);
        } else {
            obstacles[i].move(stepX, stepY);
        }
    }
}

function checkOverlapping(x1, size1, x2, size2) {
    if(x1 < x2){
        return x1 + size1 + distanceBetweenObstacles >= x2;
    } else if(x1 > x2){
        return x1 - distanceBetweenObstacles <= x2 + size2;
    }
}
function genObstacleRandom(index, offsetX) {
    let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
    let check = false;
    while (!check) {
        check = true;
        for (let j = 0; j < obstacles.length; j++) {
            if (checkOverlapping(x, size, obstacles[j].x, size)) {
                check = false;
                break;
            }
        }
        if (!check) {
            x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
        }
    }
    let imageSrc = "";
    let number = Math.round(Math.random() * 3) + 1;
    switch (number){
        case 1: imageSrc = "styles/textures/cactus.png"; break;
        case 2: imageSrc = "styles/textures/chest.png"; break;
        case 3: imageSrc = "styles/textures/stone.png"; break;
        case 4: imageSrc = "styles/textures/treeTrunk.png"; break;
    }
    obstacles[index] = new drawObstacle(x, heightOfObstacles, size, size, imageSrc);
    counterOfObstacles++;
    if(counterOfObstacles % 30 == 0){
        speedOfObstacles += counterOfObstacles / 15;
        speed += counterOfObstacles / 15 - 1;
    }
}
