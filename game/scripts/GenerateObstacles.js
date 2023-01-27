let amountOfObstacles = 3;
let obstacles = [];
const size = 50;
let heightOfObstacles = 0;

function initialGenerate(offsetX) {
    // store all x values
    heightOfObstacles = gameArea.canvas.height - size - defaultHeightOfPlayer;
    let xArray = [];
    let counter = 0;
    for (let i = 0; i < amountOfObstacles; i++) {
        let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
        let check = false;
        while (!check) {
            check = true;
            for (let j = 0; j < counter; j++) {
                if (checkOverlapping(x, size, xArray[j], size)) {
                    check = false;
                }
            }
            if (!check) {
                x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
            }
            counter++;
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
    return (x1 >= x2 && x1 <= x2 + size2) || (x1 + size1 >= x2 && x1 + size1 <= x2 + size2)
}

function genObstacleRandom(index, offsetX) {
    let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
    let imageSrc = "";
    let number = Math.round(Math.random() * 3) + 1;
    switch (number){
        case 1: imageSrc = "styles/textures/cactus.png"; break;
        case 2: imageSrc = "styles/textures/chest.png"; break;
        case 3: imageSrc = "styles/textures/stone.png"; break;
        case 4: imageSrc = "styles/textures/treeTrunk.png"; break;
    }
    obstacles[index] = new drawObstacle(x, heightOfObstacles, size, size, imageSrc);
}
