class Score extends LabelObject {
    constructor(x, y, text, color, font,game) {
        super(x, y, text, color, font,game);
        this.frameCounter = 0;
        this.currentScore = 0;
    }
    show(){
        this.frameCounter++;
        if(this.frameCounter % 50 == 0){
            this.currentScore++;
        }
        this.text = "Score: " + this.currentScore;
        this.update();
    }
}