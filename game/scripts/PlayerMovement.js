let playerPosX = 200; // start position of the player
let speed = 3; // speed of the player

// for jumping
let currentJump = 0; // state of the jump
let jumpHeight = 350; // maximum height of the jump, after that the gravity will be activated.
let jumpSpeed = 0.5; // describe, how fast the height of the player will reach "jumpHeight"
let activateJumping = false; // disable or enable jumping
let spaceDown = false; // check if the spacebar is pressed
let spaceUpTemp = false; // addition to the spaceDown
let jumpXValue = 5; // value for moving the player right while jumping
let defaultHeightOfPlayer = 75; // height of the underground
let beforeJumpX = 0; // xPos before jumping
let startJumping = false; // check if the player is jumping

/**
 * Every call, this function decrement the "currentJump"
 */
function jump() {
    isGrounded = false;
    currentJump -= jumpSpeed;
    player.movePlayer(jumpXValue, currentJump);
}

