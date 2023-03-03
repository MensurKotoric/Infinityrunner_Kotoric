let gravity = 2; // speed of the gravity
let currentGravity = 0; // state of the player gravity

/**
 * Every call, this function will increment the currentGravity. Also check if the player is grounded.
 */
function gravityMovement() {
    currentGravity += gravity;
    // check if the player is grounded
    if (player.y + player.height + currentGravity >= gameArea.canvas.height - player.defaultHeightOfPlayer) {
        currentGravity = 0;
        player.setLoadJumpingImage(true);
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
    player.move(0, currentGravity);
}