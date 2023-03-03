class Player {
    currentJump = 0;
    isGrounded = false;
    activateJumping = false;
    spaceDown = false;
    spaceUpTemp = false;
    startJumping = false;
    constructor(width, height, image, x, y, playerPosX,speed,jumpHeight,jumpSpeed,jumpXValue,defaultHeightOfPlayer) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = image;
        this.playerPosX = playerPosX;
        this.speed = speed;
        this.jumpHeight = jumpHeight;
        this.jumpSpeed = jumpSpeed;
        this.jumpXValue = jumpXValue;
        this.defaultHeightOfPlayer = defaultHeightOfPlayer;
    }

    /**
     * This Method draw the player
     */
    update() {
        let panel = gameArea.context;
        panel.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    /**
     * This Method move the player by incrementing the x and y coordinate
     * @param stepX relative value of the x coordinate, how much to move right or left
     * @param stepY relative value of the y coordinate, how much to move up or down
     */
    move(stepX, stepY) {
        if (this.x + stepX >= 0 && this.y + stepX >= 0 && this.x + this.width + stepX <= gameArea.canvas.width && this.height + stepY <= gameArea.canvas.height - this.defaultHeightOfPlayer) {
            this.x += stepX;
            this.y += stepY;
        }
    }
    jump(){
        this.isGrounded = false;
        this.currentJump -= this.jumpSpeed;
        this.move(this.jumpXValue,this.currentJump);
    }
    setCurrentJump(currentJump){
        this.currentJump = currentJump;
    }
    setIsGrounded(isGrounded){
        this.isGrounded = isGrounded;
    }
    setActivateJumping(activateJumping){
        this.activateJumping = activateJumping;
    }
    setSpaceDown(spaceDown){
        this.spaceDown = spaceDown;
    }
    setSpaceUpTemp(spaceUpTemp){
        this.spaceUpTemp = spaceUpTemp;
    }
    setStartJumping(startJumping){
        this.startJumping = startJumping;
    }
}