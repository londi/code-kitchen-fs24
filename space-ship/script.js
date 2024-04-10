/*
Author: Leon Luethi
Tutorials:
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
- https://spicyyoghurt.com/tutorials/html5-javascript-game-development/create-a-proper-game-loop-with-requestanimationframe

Sprite source: https://www.iconfinder.com/icons/9023814/rocket_fill_icon

*/

"use strict";


import Asteroid from "./GameObjects.js";

let canvas;
let ctx;

let spaceship = new Image();
let asteroids = [];

let pos = [1, 100];
let posFactor = [1, 1];

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

    asteroids = [
        new Asteroid(ctx, 250, 50, 0, 50),
        new Asteroid(ctx, 250, 300, 0, -50),
        new Asteroid(ctx, 150, 0, 50, 50),
        new Asteroid(ctx, 250, 150, 50, 50),
        new Asteroid(ctx, 350, 75, -50, 50),
        new Asteroid(ctx, 300, 300, 50, -50)
    ];

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
    detectCollistion();
    clearCanvas();
    draw();

    window.requestAnimationFrame(gameLoop);
}

async function update() {
    if (pos[0] >= 250 || pos[0] <= 0) {
        posFactor[0] *= -1;
    }

    pos[0] += posFactor[0] * 150 * timeFactor;

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].update(timeFactor);
    }
}

function detectCollistion() {
    let obj1;
    let obj2;

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].isColliding = false;
    }

    for (let i = 0; i < asteroids.length; i++) {
        obj1 = asteroids[i];
        for (let j = 0; j < asteroids.length; j++) {
            obj2 = asteroids[j];
            if (obj1 !== obj2) {
                if (isIntersecting(
                    obj1.x, obj1.y, obj1.width, obj1.height,
                    obj2.x, obj2.y, obj2.width, obj2.height)
                ) {
                    obj1.isColliding = true;
                    obj2.isColliding = true;
                }
            }
        }
    }
}

function isIntersecting(x1, y1, w1, h1, x2, y2, w2, h2) {
        return ((x2 > x1 && x2 < (x1+h1)) && (y2 > x1 && y2 < (y1+h1))) ||
            ((x1 > x2 && x1 < (x2+w2)) && (y1 > x2 && y1 < (y2+w2)));
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

async function draw() {
    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].draw();
    }
    drawSpaceship();
}


function drawSpaceship() {

    ctx.fillStyle = "rgb(186,15,245)";

    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("FPS: " + fps_formatted, 10, 30);

    ctx.drawImage(spaceship, pos[0], pos[1], 50, 50);
}




































