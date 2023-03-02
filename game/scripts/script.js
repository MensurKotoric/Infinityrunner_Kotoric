let player; // store the player object
let animation; // store the animation
let loadJumpingImage = false;
let myBackground;
let underground1;
let underground2;
let scoreObj;

/**
 * Start the Game
 */
function startGame() {
    gameArea.start();
    addKeyListener();
    initialGenerate(800);
    initialHearts();
    player = new Player(100, 100, "styles/textures/Player_Run.png", playerPosX, 120);
    myBackground = new background(1870, 920, "styles/textures/background.jpg", 0, 0);
    underground1 = new underground(1870, 75, "styles/textures/textures_ground_v2.png", 0, 845);
    underground2 = new underground(1870, 75, "styles/textures/textures_ground_v2.png", 1850, 845);
    scoreObj = new score("30px", "Stencil", "white", 1670, 40, "text");
    player.update();
    updateForAnimation();
}

/**
 *  Object of the game area.
 * @type {{canvas: HTMLCanvasElement, start: gameArea.start, clear: gameArea.clear}}
 */
let gameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.setAttribute("id", "frame");
        this.canvas.width = 1870;
        this.canvas.height = 920;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

/**
 * This Method implement a KeyListener
 */
function addKeyListener() {
    window.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "d":
                dDown = true;
                break;
            case "a":
                aDown = true;
                break;
            case "s":
                sDown = true;
                break;
            case " ":
                if (player.x < gameArea.canvas.width / 2) {
                    spaceDown = true;
                }
                break;
        }
    })
    window.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "d":
                dDown = false;
                break;
            case "a":
                aDown = false;
                break;
            case "s":
                sDown = false;
                break;
            case " ":
                if (player.x < gameArea.canvas.width / 2) {
                    spaceUpTemp = true;
                }
                break;
        }
    })
}

/**
 * This function is used for the animation.
 */
function updateForAnimation() {
    gameArea.clear();
    myBackground.update();
    if (!gameOver) {
        underground1.newPos();
        underground2.newPos();
        underground1.update();
        underground2.update();
        // jumping
        if (activateJumping && spaceDown) {
            if (!loadJumpingImage) {
                loadJumpingImage = true;
                player.image.src = "styles/textures/Player_Jump.png";
                startJumping = true;
            }
            // player reached jumpHeight
            if (player.y <= (gameArea.canvas.height - jumpHeight)) {
                currentJump = 0;
                activateJumping = false;
            }
            jump();
        } else {
            gravityMovement();
        }
        player.update();
        moveObstacles(-speedOfObstacles, 0);
        drawObstacles();
        detectCollisions();
        drawHearts();
        showScore();
    } else {
        drawGameOverScreen();
        newGameButtonClicked();
    }

    animation = window.requestAnimationFrame(updateForAnimation);
}

/**
 * Stop the current animation
 */
function stopAnimation() {
    window.cancelAnimationFrame(animation);
}
