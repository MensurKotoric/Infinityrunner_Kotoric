let amountOfObstacles = 3;
let obstacles = [];
const size = 50;
let heightOfObstacles = 0;
let speedOfObstacles = 4;
let counterOfObstacles = 0;
let distanceBetweenObstacles = 150;

/**
 * This method will generate "amountOfObstacles" obstacles.
 * @param offsetX is the spacing from the right site, where obstacles can be spawned.
 */
function initialGenerate(offsetX) {
    // store x position of the obstacles
    let xArray = [];
    obstacles = [];
    heightOfObstacles = gameArea.canvas.height - size - defaultHeightOfPlayer;
    for (let i = 0; i < amountOfObstacles; i++) {
        let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
        let check = false;
        // check, if there is a collision with other obstacles
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
        // store the correct x position in the xArray
        xArray.push(x);
    }
    // write the values of the xArray into the obstacle array
    // additionally, added a random obstacle
    for (let i = 0; i < amountOfObstacles; i++) {
        let imageSrc = "";
        let number = Math.round(Math.random() * 3) + 1;
        switch (number){
            case 1: imageSrc = "styles/textures/cactus.png"; break;
            case 2: imageSrc = "styles/textures/chest.png"; break;
            case 3: imageSrc = "styles/textures/stone.png"; break;
            case 4: imageSrc = "styles/textures/treeTrunk.png"; break;
        }
        obstacles.push(new ObstacleObject(xArray[i], heightOfObstacles, size, size, imageSrc));
    }
}

/**
 * Move the Obstacles
 * @param stepX is a relative value of the x coordinate, how much to move left or right
 * @param stepY is a relative value of the y coordinate, how much to move up or down
 */
function moveObstacles(stepX, stepY) {
    for (let i = 0; i < amountOfObstacles; i++) {
        if (obstacles[i].check()) {
            genObstacleRandom(i, 600);
        } else {
            obstacles[i].move(stepX, stepY);
        }
    }
}

/**
 * Check if there is a collision between two obstacles.
 * @param x1 x pos of the first obstacle
 * @param size1 size of the first obstacle
 * @param x2 x pos of the second obstacle
 * @param size2 size of the second obstacle
 * @returns {boolean}
 */
function checkOverlapping(x1, size1, x2, size2) {
    if(x1 < x2){
        return x1 + size1 + distanceBetweenObstacles >= x2;
    } else if(x1 > x2){
        return x1 - distanceBetweenObstacles <= x2 + size2;
    }
}

/**
 * Create a new obstacle and store it in the obstacles array
 * @param index position of the obstacle array, which obstacle have to be refreshed
 * @param offsetX is the spacing from the right site, where the obstacle can be spawned.
 */
function genObstacleRandom(index, offsetX) {
    let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
    // check, if there is a collision with other obstacles
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
    // generate a random obstacle
    let imageSrc = "";
    let number = Math.round(Math.random() * 3) + 1;
    switch (number){
        case 1: imageSrc = "styles/textures/cactus.png"; break;
        case 2: imageSrc = "styles/textures/chest.png"; break;
        case 3: imageSrc = "styles/textures/stone.png"; break;
        case 4: imageSrc = "styles/textures/treeTrunk.png"; break;
    }
    obstacles[index] = new ObstacleObject(x, heightOfObstacles, size, size, imageSrc);
    counterOfObstacles++;
    // change the speed of the player and of the obstacles regarding of the "counterOfObstacles".
    if(counterOfObstacles % 30 == 0){
        speedOfObstacles += counterOfObstacles / 15;
        speed += counterOfObstacles / 15 - 1;
    }
}
