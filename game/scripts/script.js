let player;
let animation;
let loadJumpingImage = false;

function startGame() {
    gameArea.start();
    addKeyListener();
    initialGenerate(200);
    player = new drawPlayer(100, 100, "styles/textures/Player_Stand.png", 10, 120);
    player.update();
    updateForAnimation();
}

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
                spaceDown = true;
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
                spaceDownTemp = false;
                break;
        }
    })
}

function updateForAnimation() {
    gameArea.clear();
    // for jumping
    if (activateJumping && spaceDown) {
        if (!loadJumpingImage) {
            loadJumpingImage = true;
            player.image.src = "styles/textures/Player_Jump.png";
        }
        if (player.y <= (gameArea.canvas.height - jumpHeight)) {
            currentJump = 0;
            activateJumping = false;
        }
        jump();
    } else {
        gravityMovement();
    }
    // left right
    if (sDown) {
        player.image.src = "styles/textures/Player_Stand.png";
        moveDown();
    }
    if (dDown) {
        moveRight();
        player.image.src = "styles/textures/Player_Run.png";
    }
    if (aDown) {
        moveLeft();
        player.image.src = "styles/textures/Player_Run.png";
    }
    moveObstacles(-1,0);
    animation = window.requestAnimationFrame(updateForAnimation);
}

function stopAnimation() {
    window.cancelAnimationFrame(animation);
}
