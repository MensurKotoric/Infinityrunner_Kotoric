let playerPosX = 200;

let dDown = false;
let aDown = false;
let sDown = false;
let speed = 4;

// for jumping
let currentJump = 0;
let jumpHeight = 350;
let jumpSpeed = 0.5;
let activateJumping = false;
let spaceDown = false;
let spaceDownTemp = true; // low active
let jumpXValue = 5;
let defaultHeightOfPlayer = 75;
let beforeJumpX = 0;
let startJumping = false;

// for checking if moving
let tempX = 0;
let tempY = 0;



function moveLeft() {
    player.movePlayer(-speed, 0);
}

function moveRight() {
    player.movePlayer(speed, 0)
}

function moveDown() {
    player.movePlayer(0, speed);
}

function jump() {
    isGrounded = false;
    currentJump -= jumpSpeed;
    player.movePlayer(jumpXValue, currentJump);
}
function checkIfMove(){
    if(player.x == tempX && player.y == tempY){
        return false;
    }
    tempX = player.x;
    tempY = player.y;
    return true;
}

