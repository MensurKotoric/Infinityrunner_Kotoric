let gravity = 1;
let currentGravity = 0;
let isGrounded = false;

function gravityMovement() {
    currentGravity += gravity;
    if (player.y + currentGravity >= gameArea.canvas.height - player.height) {
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
    movePlayer(0, currentGravity);
}