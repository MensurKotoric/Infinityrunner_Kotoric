class MovableObject extends StandardObject {
    constructor(x, y, width, height, identifier, stepX, stepY, game) {
        super(x, y, width, height, identifier, game);
        this.stepX = stepX;
        this.stepY = stepY;
    }

    move() {
        this.x += this.stepX;
        this.y += this.stepY;
        this.update();
    }

    checkCollision(object) {
        return this.checkPoint(this.x, this.y, object.x, object.y, object.width, object.height) ||
            this.checkPoint(this.x + this.width, this.y, object.x, object.y, object.width, object.height) ||
            this.checkPoint(this.x, this.y + this.height, object.x, object.y, object.width, object.height) ||
            this.checkPoint(this.x + this.width, this.y + this.height, object.x, object.y, object.width, object.height);
    }

    checkPoint(pX, pY, oX, oY, oW, oH) {
        return pX >= oX && pX <= oX + oW && pY >= oY && pY <= oY + oH;
    }

}