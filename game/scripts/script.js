function main() {
    const game = new Game();
    game.start();
}
class Game {
    constructor() {
        this.context = null;
        this.animation = null;
        this.gameOver = false;
        this.canvas = document.createElement('canvas');
        this.player = new Player(100, 100, "styles/textures/Player_Run.png", 300, 120, 300, 3, 350, 2, 10, 75);
        this.score = new Score("30px", "Stencil", "white", 1670, 40, "text");
        this.gravity = new Gravity(2);
        this.background = new background(1870, 920, "styles/textures/background.jpg", 0, 0);
        this.underground1 = new underground(1870, 75, "styles/textures/textures_ground_v2.png", 0, 845);
        this.underground2 = new underground(1870, 75, "styles/textures/textures_ground_v2.png", 1850, 845);
        this.manageHeart = new ManageHearts(5, 10, 10, 20, 50, 35, "styles/textures/heart.png");
        this.manageObstacles = new ManageObstacles(3, 50, 150, 800, 795, 4, 10);
        this.gameOverScreen = new GameOverScreen();
    }

    start() {
        this.canvas.setAttribute('id', 'frame');
        this.canvas.width = 1870;
        this.canvas.height = 920;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.player.update();
        this.manageHeart.initialHearts();
        this.addKeyListener();
        this.updateAnimation();
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addKeyListener() {
        window.addEventListener("keydown", function (event) {
            switch (event.key) {
                case " ":
                    if (player.x < this.canvas.width / 2) {
                        player.spaceDown = true;
                    }
                    break;
            }
        })
        window.addEventListener("keyup", function (event) {
            switch (event.key) {
                case " ":
                    if (player.x < this.canvas.width / 2) {
                        player.spaceUpTemp = true;
                    }
                    break;
            }
        })
    }
    updateAnimation() {
        this.clear();
        this.background.update();
        if(!this.gameOver){
            this.underground1.newPos();
            this.underground2.newPos();
            this.underground1.update();
            this.underground2.update();
            // check jumping
            if(this.player.activateJumping && this.player.spaceDown){
                // load image
                if(!this.player.loadJumpingImage){
                    this.player.loadJumpingImage = true;
                    this.player.image.src = "styles/textures/Player_Jump.png"
                    this.player.startJumping = true;
                }
                // player reached jumpHeight
                if(this.player.y <= (this.canvas.height - this.player.jumpHeight)){
                    this.player.currentJump = 0;
                    this.player.activateJumping = false;
                }
                this.player.jump();
            } else {
                this.gravity.performGravity();
            }
            this.player.update();
            this.manageObstacles.moveObstacles();
            this.manageObstacles.drawObstacles();
            this.manageObstacles.detectCollisions();
            this.manageHeart.drawHearts();
            this.score.show();
        } else {
            this.gameOverScreen.drawGameOverScreen();
            this.gameOverScreen.newGameButtonClicked();
        }
        this.animation = window.requestAnimationFrame(this.updateAnimation);
    }
    stopAnimation(){
        window.cancelAnimationFrame(this.animation);
    }
}
