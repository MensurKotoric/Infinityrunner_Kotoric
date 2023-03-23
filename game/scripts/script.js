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
        this.ground1 = new MovableObject(0, 845, 1870, 75, 'ground', -3, 0,this);
        this.ground2 = new MovableObject(1850, 845, 1870, 75, 'ground', -3, 0,this);
        this.manageHeart = new ManageHearts(5, 10, 10, 20, 50, 35, this);
        this.manageObstacles = new ManageObstacles(3, 50, 300, 800, 795, 4, 15,this);
        this.gameOverScreen = new GameOverScreen(this);
        this.manageObstacles.initialise();
        this.manageHeart.initialHearts();
        this.addKeyListener(this);
    }
}