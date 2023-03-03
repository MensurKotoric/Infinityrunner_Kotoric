class Gravity {
    currentGravity = 0;
    constructor(gravity) {
        this.gravity = gravity;
    }
    performGravity(){
        this.currentGravity += this.gravity;
        if(player.y + player.height + this.currentGravity >= gameArea.canvas.height - player.defaultHeightOfPlayer){
            this.currentGravity = 0;
            player.setLoadJumpingImage(false);
            // reset the position of the player to the start position after a jump.
            if(player.startJumping){
                if(player.x >= player.playerPosX - player.speed){
                    player.move(-player.speed, 0);
                } else {
                    player.setStartJumping(false);
                }
                player.image.src = "styles/textures/Player_Run.png";
            }
            // enable jumping
            if (player.spaceUpTemp) {
                player.setSpaceUpTemp(false);
                player.setActivateJumping(true);
            }
        }
        player.move(0,this.currentGravity);
    }
}