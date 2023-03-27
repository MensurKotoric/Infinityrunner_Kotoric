class GameOverScreen {
    constructor(game) {
        this.game = game;
        this.gameOverLabel = new LabelObject(this.game.canvas.width / 2 - 2 * this.game.canvas.width / 7, this.game.canvas.height / 2 - 200, "Game Over !!!", "white", "180px Stencil", this.game);
        this.highScoreLabel = new LabelObject(this.game.canvas.width / 2 - this.game.canvas.width / 8, this.game.canvas.height / 2, "HighScore: ", "white", "120px Brush Script MT", this.game);
        this.currentScoreLabel = new LabelObject(this.game.canvas.width / 2 - this.game.canvas.width / 6, this.game.canvas.height / 2 + this.game.canvas.height / 7, "CurrentScore: ", "white", "120px Brush Script MT", this.game);
        this.newGameLabel = new LabelObject(this.game.canvas.width / 2 - 120, this.game.canvas.height - 180, "New Game", "white", "72px Brush Script MT", this.game);
        this.roundRectangle = new StandardObject(this.game.canvas.width / 2 - 225, this.game.canvas.height - 300, 450, 200, '', this.game);
    }

    update() {
        this.highScoreLabel.text = "HighScore: " + localStorage.getItem('highScore');
        this.currentScoreLabel.text = "CurrentScore: " + this.game.score.currentScore;
        this.gameOverLabel.update();
        this.highScoreLabel.update();
        this.currentScoreLabel.update();
        this.highScoreLabel.update();
        this.roundRect(this.roundRectangle, 50, true);
        this.roundRect(this.roundRectangle, 50, false);
        this.newGameLabel.update();
    }

    roundRect(object, radius, fill) {
        this.game.context.beginPath();
        this.game.context.moveTo(object.x + radius, object.y);
        this.game.context.arcTo(object.x + object.width, object.y, object.x + object.width, object.y + object.height, radius);
        this.game.context.arcTo(object.x + object.width, object.y + object.height, object.x, object.y + object.height, radius);
        this.game.context.arcTo(object.x, object.y + object.height, object.x, object.y, radius);
        this.game.context.arcTo(object.x, object.y, object.x + object.width, object.y, radius);
        this.game.context.closePath();
        if (fill) {
            this.game.context.fillStyle = "green";
            this.game.context.fill();
        } else {
            this.game.context.strokeStyle = "white";
            this.game.context.stroke();
        }
    }

    buttonClicked() {
        let checkX1 = this.roundRectangle.x;
        let checkY1 = this.roundRectangle.y;
        let checkX2 = this.roundRectangle.x + this.roundRectangle.width;
        let checkY2 = this.roundRectangle.y + this.roundRectangle.height;
        document.onclick = function (event) {
            if(event.clientX >= checkX1 && event.clientX <= checkX2 && event.clientY >= checkY1 && event.clientY <= checkY2){
                document.location.reload();
            }
        }
    }
}
