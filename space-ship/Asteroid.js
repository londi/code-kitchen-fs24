import GameObject from "./GameObject";

export default class Asteroid extends GameObject {

    constructor(context, x, y, vx, vy) {
        super(context, x, y, vx, vy);

        this.width = 50;
        this.height = 50;
    }

    draw() {
        this.context.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(timeFactor) {
        this.x += this.vx * timeFactor;
        this.y += this.vy * timeFactor;
    }

}
