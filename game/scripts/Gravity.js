let gravity = 2; // speed of the gravity
let currentGravity = 0; // state of the player gravity
let isGrounded = false; // check if the player is on the ground

/**
 * Every call, this function will increment the currentGravity. Also check if the player is grounded.
 */
function gravityMovement() {
    currentGravity += gravity;
    // check if the player is grounded
    if (player.y + player.height + currentGravity >= gameArea.canvas.height - defaultHeightOfPlayer) {
        currentGravity = 0;
        /*
        if (!aDown && !dDown) {
            player.image.src = "styles/textures/Player_Stand.png";
        }*/
        loadJumpingImage = false;
        // reset the position of the player to the start position after a jump.
        if(startJumping){
            if(player.x >= playerPosX - speed){
                player.movePlayer(-speed, 0);
            } else {
                startJumping = false;
            }
            player.image.src = "styles/textures/Player_Run.png";
        }
        // enable jumping
        if (spaceUpTemp) {
            spaceUpTemp = false;
            activateJumping = true;
        }
    }
    player.movePlayer(0, currentGravity);
}