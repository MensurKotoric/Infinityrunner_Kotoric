let amountOfObstacles = 10;
let obstacles = [];
const size = 20;

function initialGenerate(offsetX) {
    for (let i = 0; i < amountOfObstacles; i++) {
        let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
        let y = gameArea.canvas.height - size;
        let check = false;
        /*while (!check) {
            check = true;
            for (let i = 0; i < amountOfObstacles; i++){
                if (x === obstacles[i].x) {
                    check = false;
                }
            }
            x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
            y = gameArea.canvas.height - size;
        }*/
        obstacles[i] = new drawObstacle(x, y, size, size, "red");
        obstacles[i].update();
    }
}

function moveObstacles(stepX, stepY) {
    for (let i = 0; i < amountOfObstacles; i++) {
        obstacles[i].move(stepX, stepY);
    }
}
