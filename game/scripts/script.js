function startGame(){
    gameArea.start();
}
let gameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.setAttribute("id", "panel");
        this.canvas.width = 1870;
        this.canvas.height = 940;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear: function (){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
}