/*
Author: Leon Luethi
Tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

Sprite source: https://www.iconfinder.com/icons/9023814/rocket_fill_icon

*/

let pos = [1, 1];
let posFactor = [1, 1];

document.addEventListener('DOMContentLoaded', () => {
    console.log("Site fully loaded");
    const interval = setInterval(cycle, 10);
})

async function cycle() {
    update();
    draw();
}

async function update() {
    console.log("update");

    if (pos[0] >= 290 || pos[0] <= 0) {
        posFactor[0] *= -1;
    }

    pos[0] += posFactor[0] * 5;
}

async function draw() {
    const canvas = document.getElementById('display')
    const context = canvas.getContext("2d");
    drawSpaceship(context);
}


function drawSpaceship(context) {
    context.clearRect(0, 0, 300, 300);
    context.fillStyle = "rgb(186,15,245)";

    context.beginPath()
    context.moveTo(pos[0], pos[1]);
    context.lineTo(pos[0] + 10,pos[1] + 10);
    context.lineTo(pos[0] + 0, pos[1] + 20);
    context.lineTo(pos[0] + 0, pos[1] + 0);
    context.closePath();
    context.fill();
    // context.drawImage(document.getElementById("spaceship"), pos[0], pos[1], 50, 50);
}


function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    })
}
