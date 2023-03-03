class ManageObstacles {
    constructor(amountOfObstacles, size, distanceBetweenObstacles, offsetX, heightOfObstacles, speed, sensitivity) {
        this.amountOfObstacles = amountOfObstacles;
        this.size = size;
        this.distanceBetweenObstacles = distanceBetweenObstacles;
        this.obstacles = [];
        this.heightOfObstacles = heightOfObstacles;
        this.counterOfObstacles = 0;
        this.speedOfObstacles = speed;
        this.sensitivity = sensitivity;
        for(let i = 0; i < this.amountOfObstacles; i++){
            let x =  gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
            let check = false;
            while(!check){
                check = true;
                for(let j = 0; j < this.obstacles.length; j++){
                    if(this.checkOverlapping(x,this.size,this.obstacles[j].x,this.size)){
                        check = false;
                        break;
                    }
                }
                if(!check){
                    x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
                }
            }
            let imageSrc = "";
            let number = Math.round(Math.random() * 3) + 1;
            switch (number) {
                case 1:
                    imageSrc = "styles/textures/cactus.png";
                    break;
                case 2:
                    imageSrc = "styles/textures/chest.png";
                    break;
                case 3:
                    imageSrc = "styles/textures/stone.png";
                    break;
                case 4:
                    imageSrc = "styles/textures/treeTrunk.png";
                    break;
            }
            this.obstacles.push(new Obstacle(x,this.heightOfObstacles,this.size,this.size,imageSrc));
        }
    }
    moveObstacles(){
        for(let i = 0; i < this.amountOfObstacles; i++){
            if(this.obstacles[i].check()){
                this.genObstacleRandom(i, 800);
            } else {
                this.obstacles[i].move(-this.speedOfObstacles,0);
            }
        }
    }
    checkOverlapping(x1,size1,x2,size2){
        if(x1 < x2) {
            return x1 + size1 + this.distanceBetweenObstacles >= x2;
        } else if(x1 > x2){
            return x1 - this.distanceBetweenObstacles <= x2 + size2;
        } else {
            return true;
        }
    }
    genObstacleRandom(index,offsetX){
        let x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
        // check, if there is a collision with other obstacles
        let check = false;
        while (!check) {
            check = true;
            for (let j = 0; j < this.obstacles.length; j++) {
                if (this.checkOverlapping(x, this.size, this.obstacles[j].x, this.size)) {
                    check = false;
                    break;
                }
            }
            if (!check) {
                x = gameArea.canvas.width - offsetX + Math.round(Math.random() * offsetX);
            }
        }
        // generate a random obstacle
        let imageSrc = "";
        let number = Math.round(Math.random() * 3) + 1;
        switch (number) {
            case 1:
                imageSrc = "styles/textures/cactus.png";
                break;
            case 2:
                imageSrc = "styles/textures/chest.png";
                break;
            case 3:
                imageSrc = "styles/textures/stone.png";
                break;
            case 4:
                imageSrc = "styles/textures/treeTrunk.png";
                break;
        }
        this.obstacles[index] = new Obstacle(x, this.heightOfObstacles, this.size, this.size, imageSrc);
        this.counterOfObstacles++;
        // change the speed of the player and of the obstacles regarding of the "counterOfObstacles".
        if (this.counterOfObstacles % 30 == 0) {
            this.speedOfObstacles += this.counterOfObstacles / 15;
            player.setSpeed(this.counterOfObstacles / 15 - 1);
        }
    }
    drawObstacles(){
        for(let i = 0; i < this.amountOfObstacles; i++){
            this.obstacles[i].update();
        }
    }
    detectCollisions(){
        for(let i = 0; i < this.amountOfObstacles; i++){
            if(this.checkCollision(player.x - this.sensitivity,player.y - this.sensitivity,player.width - this.sensitivity,player.height - this.sensitivity,this.obstacles[i].x,this.obstacles[i].y,this.obstacles[i].width,this.obstacles[i].height)){
                manageHeart.damageDetected();
                this.genObstacleRandom(i, 800);
            }
        }
    }
    checkCollision(o1X,o1Y,w1,h1,o2X,o2Y,w2,h2) {
        return this.checkPoint(o1X,o1Y,o2X,o2Y,w2,h2) ||
            this.checkPoint(o1X + w1,o1Y,o2X,o2Y,w2,h2) ||
            this.checkPoint(o1X,o1Y + h1,o2X,o2Y,w2,h2) ||
            this.checkPoint(o1X + w1,o1Y + h1,o2X,o2Y,w2,h2);
    }
    checkPoint(pX,pY, oX, oY, w, h) {
        return pX >= oX && pX <= oX + w && pY >= oY && pY <= oY + h;
    }

}