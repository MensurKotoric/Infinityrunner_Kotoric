class Player extends MovableObject {
    constructor(x, y, width, height, identifier, stepX, stepY,playerPosX,speed,jumpHeight,jumpSpeed,jumpXValue,defaultHeightOfPlayer,gravity,game) {
        super(x, y, width, height, identifier, stepX, stepY, game);
        this.currentJump = 0;
        this.isGrounded = false;
        this.activateJumping = false;
        this.spaceDown = false;
        this.spaceUpTemp = false;
        this.startJumping = true;
        this.loadJumpingImage = false;
        this.playerPosX = playerPosX;
        this.speed = speed;
        this.jumpHeight = jumpHeight;
        this.jumpSpeed = jumpSpeed;
        this.jumpXValue =jumpXValue;
        this.defaultHeightOfPlayer = defaultHeightOfPlayer;
        this.gravity = gravity;
        this.currentGravity = 0;
    }
    jump() {
        this.isGrounded = false;
        this.currentJump -= this.jumpSpeed;
        this.stepX = this.jumpXValue;
        this.stepY = this.currentJump;
        this.move();
    }
    performGravity() {
        this.currentGravity += this.gravity;
        if(this.y + this.height + this.currentGravity >= this.game.canvas.height - this.defaultHeightOfPlayer){
            this.currentGravity = 0;
            this.image.src = "styles/textures/Player_Run.png";
            this.loadJumpingImage = false;
            // reset the position of the player to the start position after a jump
            if(this.startJumping){
                if(this.x >= this.playerPosX - this.speed){
                    this.stepX = -this.speed/2;
                    this.stepY = 0;
                    this.move();
                } else {
                    this.stepX = 0;
                    this.startJumping = false;
                }
            }
            // enable jumping
            if(this.spaceUpTemp && this.x <= this.game.canvas.width / 2 - this.width){
                this.spaceUpTemp = false;
                this.activateJumping = true;
            }
        } else {
            this.stepX = this.jumpXValue;
        }
        this.stepY = this.currentGravity;
        this.move();
    }
    movement(){
        if(this.activateJumping && this.spaceDown){
            if(!this.loadJumpingImage){
                this.loadJumpingImage = true;
                this.image.src = "styles/textures/Player_Jump.png";
                this.startJumping = true;
            }
            // player reached jumpHeight
            if(this.y <= (this.game.canvas.height - this.jumpHeight)){
                this.currentJump = 0;
                this.activateJumping = false;
            }
            this.jump();
        } else {
            this.performGravity();
        }
    }
}