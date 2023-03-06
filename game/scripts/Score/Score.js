class Score {
    constructor(width, height, color, x, y, type) {
        this.type = type;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
        this.text = '';
        this.frameCounter = 0;
        this.currentScore = 0;
    }
    show() {
        this.frameCounter++;
        if (this.frameCounter % 60 == 0) {
            this.currentScore++;
        }
        this.text = "Score: " + this.currentScore;
        if (this.currentScore >= localStorage.getItem('highScore')) {
            localStorage.setItem('highScore', this.currentScore);
        }
        this.update();
    }

    update() {
        let panel = gameArea.context;
        if (this.type == "text") {
            panel.font = this.width + " " + this.height;
            panel.fillStyle = this.color;
            panel.fillText(this.text, this.x, this.y);
        }
    }

}