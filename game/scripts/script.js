function main() {
    const game = new Game();
    game.start();
}

class Game {
    constructor() {
        this.gameOver = false;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'frame');
        this.canvas.width = window.innerWidth / 1.026737;
        this.canvas.height = window.innerHeight / 1.054565;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.player = new Player(this.canvas.width / 6, 9.5 * this.canvas.height / 12, this.canvas.width / 18, this.canvas.height / 9, "player", this.canvas.width / 467, 0, this.canvas.width / 6, this.canvas.width / 624, this.canvas.height / 2.66, this.canvas.width / 624, this.canvas.width / 234, this.canvas.height / 12, this.canvas.width / 624, this);
        this.score = new Score(this.canvas.width / 1.125, this.canvas.height / 23, "Score: ", "white", this.canvas.height / 30 + "px Stencil", this);
        this.background = new StandardObject(0, 0, this.canvas.width, this.canvas.height, 'background', this);
        this.ground1 = new MovableObject(0, 11 * this.canvas.height / 12,this.canvas.width, this.canvas.height / 12, 'ground', -this.canvas.width / 467, 0, this);
        this.ground2 = new MovableObject(this.canvas.width - this.canvas.width / 100, 11 * this.canvas.height / 12, this.canvas.width, this.canvas.height / 12, 'ground',-this.canvas.width / 467, 0, this);
        this.manageHeart = new ManageHearts(5, this.canvas.width / 187, this.canvas.height / 92, 2 * this.canvas.width / 187, 5 * this.canvas.width / 187, 3.5 * this.canvas.height / 92, this);
        this.manageObstacles = new ManageObstacles(3, 5 * this.canvas.height / 92, this.canvas.width / 6.2, this.canvas.width / 2 - this.canvas.width / 20, 11 * this.canvas.height / 12 - 5 * this.canvas.height / 92, this.canvas.width / 467, this.canvas.width / 125, this);
        this.gameOverScreen = new GameOverScreen(this);
        this.manageObstacles.initialise();
        this.manageHeart.initialHearts();
        this.addKeyListener(this);
    }

    start() {
        setInterval(() => this.updateForAnimation(), 20);
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addKeyListener(game) {
        window.addEventListener("keydown", function (event) {
            if (event.key === " ") {
                game.player.spaceDown = true;
            }
        });
        window.addEventListener("keyup", function (event) {
            if (event.key === " ") {
                game.player.spaceUpTemp = true;
            }
        })
    }

    updateForAnimation() {
        this.clear();
        this.background.update();
        if (!this.gameOver) {
            this.ground1.move();
            this.ground2.move();
            const leftSideObject = new StandardObject(-this.ground1.width + this.ground1.width / 187, 11 * this.canvas.height / 12, 5, this.canvas.height / 12, '');
            if (this.ground1.checkCollision(leftSideObject)) {
                this.ground1.x = this.ground1.width - this.ground1.width / 93;
            }
            if (this.ground2.checkCollision(leftSideObject)) {
                this.ground2.x = this.ground2.width - this.ground1.width / 93;
            }
            this.player.movement();
            this.manageObstacles.moveObstacles();
            this.manageHeart.drawHearts();
            this.score.show();
        } else {
            this.gameOverScreen.update();
            this.gameOverScreen.buttonClicked();
        }
    }
}