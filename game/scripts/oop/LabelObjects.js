class LabelObjects extends StandardObject {
    constructor(x, y,text,color,font,game) {
        super(x, y,'','','',game);
        this.text = text;
        this.color = color;
        this.font = font;
    }
    update(){
        this.game.context.font = this.font;
        this.game.context.fillStyle = this.color;
        this.game.context.fillText(this.text,this.x,this.y);
    }
}