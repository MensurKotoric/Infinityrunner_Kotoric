class StandardObject {
    constructor(x,y,width,height,identifier,game) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.identifier = identifier;
        switch (this.identifier){
            case 'ground': this.image.src = "styles/textures/textures_ground_v2.png"; break;
            case 'background': this.image.src = "styles/textures/background.jpg"; break;
            case 'player': this.image.src = "styles/textures/Player_Run.png"; break;
            case 'heart': this.image.src = "styles/textures/heart.png"; break;
            case 'obstacle':
                let number = Math.round(Math.random() * 3);
                switch (number) {
                    case 0: this.image.src = "styles/textures/cactus.png";break;
                    case 1: this.image.src = "styles/textures/chest.png";break;
                    case 2: this.image.src = "styles/textures/stone.png";break;
                    case 3: this.image.src = "styles/textures/treeTrunk.png";break;
                }
                break;
        }
        this.game = game;
    }
    update(){
        this.game.context.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}