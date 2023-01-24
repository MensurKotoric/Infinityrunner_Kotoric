let amountOfObstacles = 3;
let obstacles = [];
const size = 50;
let heightOfObstacles = 0;

function initialGenerate(offsetX) {
    // store all x values
    heightOfObstacles = gameArea.canvas.height - size;
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
        obstacles.push(new drawObstacle(xArray[i], heightOfObstacles, size, size, "red"));
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
    obstacles[index] = new drawObstacle(x, heightOfObstacles, size, size, "red");
}
