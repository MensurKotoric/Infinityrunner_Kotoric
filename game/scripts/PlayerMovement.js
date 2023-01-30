let dDown = false;
let aDown = false;
let sDown = false;
let speed = 2;

// for jumping
let currentJump = 0;
let jumpHeight = 350;
let jumpSpeed = 0.7;
let activateJumping = false;
let spaceDown = false;
let spaceDownTemp = false;
let jumpXValue = 2;

function movePlayer(stepX, stepY) {
    if (player.x + stepX >= 0 && player.y + stepY >= 0 && player.x + player.width + stepX <= gameArea.canvas.width && player.y + player.height + stepY <= gameArea.canvas.height) {
        player.x += stepX;
        player.y += stepY;
        player.update();
    }
}

function moveLeft() {
    movePlayer(-speed, 0);
}

function moveRight() {
    movePlayer(speed, 0)
}

function moveDown() {
    movePlayer(0, speed);
}

function jump() {
    isGrounded = false;
    currentJump -= jumpSpeed;
    movePlayer(jumpXValue, currentJump);
}

