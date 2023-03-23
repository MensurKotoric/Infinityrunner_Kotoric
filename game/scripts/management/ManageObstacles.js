class ManageObstacles {
    constructor(amount, size, distanceBetweenObstacles, offsetX, heightOfObstacles, speed, sensitivity, game) {
        this.amount = amount;
        this.size = size;
        this.distanceBetweenObstacles = distanceBetweenObstacles;
        this.offsetX = offsetX;
        this.heightOfObstacles = heightOfObstacles;
        this.speed = speed;
        this.sensitivity = sensitivity;
        this.obstacles = [];
        this.counterOfObstacles = 0;
        this.game = game;
        this.min = offsetX;
        this.max = offsetX + 200;
    }

    initialise() {
        for (let i = 0; i < this.amount; i++) {
            this.obstacles.push(this.checkOverlappingAndGenerateObstacle());
        }
    }

    moveObstacles() {
        for (let i = 0; i < this.amount; i++) {
            this.detectCollision(i);
            this.obstacles[i].move();
        }
    }

    detectCollision(i) {
        let fakeObstacle = null;
        if (this.game.player.x >= this.obstacles[i].x + this.obstacles[i].width / 2) {
            fakeObstacle = new MovableObject(this.obstacles[i].x - this.sensitivity / 3, this.obstacles[i].y, this.obstacles[i].width, this.obstacles[i].height, 'obstacle', -this.speed, 0, this.game);
        } else {
            fakeObstacle = new MovableObject(this.obstacles[i].x + this.sensitivity, this.obstacles[i].y, this.obstacles[i].width, this.obstacles[i].height, 'obstacle', -this.speed, 0, this.game);
        }
        if (this.game.player.checkCollision(fakeObstacle)) {
            this.obstacles[i] = this.checkOverlappingAndGenerateObstacle();
            this.game.manageHeart.damageDetected();
        }
        if (this.obstacles[i].x < 0) {
            this.obstacles[i] = this.checkOverlappingAndGenerateObstacle();
        }
    }

    checkOverlappingAndGenerateObstacle() {
        if (this.obstacles.length > 0) {
            this.min = this.obstacles[0].x - this.obstacles[0].width + this.distanceBetweenObstacles;
            for (let i = 0; i < this.obstacles.length; i++) {
                if (this.min < this.obstacles[i].x + this.obstacles[i].width) {
                    this.min = this.obstacles[i].x + this.obstacles[i].width + this.distanceBetweenObstacles;
                }
            }
            if (this.min > this.max) {
                this.max = this.game.canvas.width + 200;
            } else {
                this.max = this.game.canvas.width;
            }
        }
        let x = this.min + Math.round(Math.random() * (this.max - this.min));
        let check = false;
        let testObstacle = null;
        while (!check) {
            check = true;
            testObstacle = new MovableObject(x, this.heightOfObstacles, this.size, this.size, 'obstacle', -this.speed, 0, this.game);
            for (let j = 0; j < this.obstacles.length; j++) {
                if (testObstacle.checkCollision(this.obstacles[j])) {
                    check = false;
                    break;
                }
            }
            if (!check) {
                x = this.game.canvas.width - this.offsetX + Math.round(Math.random() * this.offsetX);
            }
        }
        this.counterOfObstacles++;
        if (this.counterOfObstacles % 20 == 0) {
            this.counterOfObstacles = 0;
            this.speed += 1;
            testObstacle.stepX = -this.speed;
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].stepX = -this.speed;
            }
            this.game.player.speed += 1;
            this.game.ground1.stepX -= 1;
            this.game.ground2.stepX -= 1;
        }
        return testObstacle;
    }
}