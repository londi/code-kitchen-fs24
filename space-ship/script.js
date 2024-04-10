/*
Author: Leon Luethi
Tutorials:
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
- https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-proper-game-loop-with-requestanimationframe

Sprite source: https://www.iconfinder.com/icons/9023814/rocket_fill_icon

*/

"use strict";
let canvas;
let ctx;

let spaceship = new Image();

let pos = [1, 100];
let posFactor = [1, 1];
let angle = 180;

let frameCount = 0;
let fps_formatted = 0;
let prevTimeStamp = 0;
/*
timeFactor controls the amount of steps to be made per frame to be sure that the game animates at the same speed on different hardware.
 */
let timeFactor = 0.1;

document.addEventListener('DOMContentLoaded', () => {
    console.log("Site fully loaded");
    init();
})

function init() {
    canvas = document.getElementById('display');
    ctx = canvas.getContext('2d');
    spaceship.src = "rocket.svg";

    window.requestAnimationFrame(gameLoop);
}


async function gameLoop(timeStamp) {

    frameCount++;
    fps_formatted = Math.round(frameCount / timeStamp * 1000);
    timeFactor = Math.min(((timeStamp - prevTimeStamp) / 1000), 0.1);
    prevTimeStamp = timeStamp;

    console.debug("Time Factor: ", timeFactor)
    console.debug("FPS: ", fps_formatted);

    update();
    clearCanvas();
    draw();

    window.requestAnimationFrame(gameLoop);
}

async function update() {
    if (pos[0] >= 250 || pos[0] <= 0) {
        posFactor[0] *= -1;
    }

    pos[0] += posFactor[0] * 150 * timeFactor;

    if (angle >= 360) {
        angle = 0;
    }
    angle += 50 * timeFactor;
    turnSpaceship();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

async function draw() {
    drawSpaceship();
}


function drawSpaceship() {

    ctx.fillStyle = "rgb(186,15,245)";

    // ctx.beginPath()
    // ctx.moveTo(pos[0], pos[1]);
    // ctx.lineTo(pos[0] + 10,pos[1] + 10);
    // ctx.lineTo(pos[0] + 0, pos[1] + 20);
    // ctx.lineTo(pos[0] + 0, pos[1] + 0);
    // ctx.closePath();
    // ctx.fill();


    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("FPS: " + fps_formatted, 10, 30);

    ctx.drawImage(spaceship, pos[0], pos[1], 50, 50);
}

function turnSpaceship() {
    let radians = angle * Math.PI / 180;
    ctx.save();

    ctx.translate(pos[0], pos[1]);
    ctx.rotate(radians);
    ctx.drawImage(spaceship, pos[0], pos[1], 50, 50)

    ctx.restore();
}
