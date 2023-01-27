let gravity = 2;
let currentGravity = 0;
let isGrounded = false;


function gravityMovement() {
    currentGravity += gravity;
    if (player.y + player.height + currentGravity >= gameArea.canvas.height - defaultHeightOfPlayer) {
        currentGravity = 0;
        /*
        if (!aDown && !dDown) {
            player.image.src = "styles/textures/Player_Stand.png";
        }*/
        loadJumpingImage = false;
        if(startJumping){
            if(player.x >= playerPosX - speed){
                player.movePlayer(-speed, 0);
            } else {
                //player.movePlayer(playerPosX,0);
                startJumping = false;
            }
            player.image.src = "styles/textures/Player_Run.png";
        }
        if (!spaceDownTemp) {
            spaceDownTemp = true;
            activateJumping = true;
        }
    }
    player.movePlayer(0, currentGravity);
}