function main() {
    const game = new Game();
    game.start();
}

class Game {
    constructor() {
        this.gameOver = false;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'frame');
        this.canvas.width = 1870;
        this.canvas.height = 920;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.player = new Player(300, 745, 100, 100, "player", 4, 0, 300, 3, 350, 3, 8, 75, 3, this);
        this.score = new Score(1670, 40, "Score: ", "white", "30px Stencil", this);
        this.background = new StandardObject(0, 0, 1870, 920, 'background', this);
        this.ground1 = new MovableObject(0, 845, 1870, 75, 'ground', -3, 0, this);
        this.ground2 = new MovableObject(1850, 845, 1870, 75, 'ground', -3, 0, this);
        this.manageHeart = new ManageHearts(5, 10, 10, 20, 50, 35, this);
        this.manageObstacles = new ManageObstacles(3, 50, 300, 800, 795, 4, 15, this);
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
            const leftSideObject = new StandardObject(-1865, 850, 5, 75, '');
            if (this.ground1.checkCollision(leftSideObject)) {
                this.ground1.x = this.ground1.width - 20;
            }
            if (this.ground2.checkCollision(leftSideObject)) {
                this.ground2.x = this.ground2.width - 20;
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