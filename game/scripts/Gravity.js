let gravity = 2;
let currentGravity = 0;
let isGrounded = false;

function gravityMovement() {
    currentGravity += gravity;
    if (player.y + player.height + currentGravity >= gameArea.canvas.height - defaultHeightOfPlayer) {
        currentGravity = 0;
        isGrounded = true;
        if (!aDown && !dDown) {
            player.image.src = "styles/textures/Player_Stand.png";
        }
        loadJumpingImage = false;
        if (!spaceDownTemp) {
            activateJumping = true;
            spaceDownTemp = true;
        }
    }
    player.movePlayer(0, currentGravity);
}