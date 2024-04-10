/*
Author: Leon Luethi
Tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage

Sprite source: https://www.iconfinder.com/icons/9023814/rocket_fill_icon

*/
let spaceship = new Image();

let pos = [1, 1];
let posFactor = [1, 1];
let angle = 180;

document.addEventListener('DOMContentLoaded', () => {
    console.log("Site fully loaded");

    // const interval = setInterval(cycle, 20);
    cycle();
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


function drawSpaceship(ctx) {
    ctx.clearRect(0, 0, 300, 300);
    ctx.fillStyle = "rgb(186,15,245)";

    //ctx.rotate((angle * Math.PI) / 180);

    // ctx.beginPath()
    // ctx.moveTo(pos[0], pos[1]);
    // ctx.lineTo(pos[0] + 10,pos[1] + 10);
    // ctx.lineTo(pos[0] + 0, pos[1] + 20);
    // ctx.lineTo(pos[0] + 0, pos[1] + 0);
    // ctx.closePath();
    // ctx.fill();


    // ctx.drawImage(document.getElementById("spaceship"), pos[0], pos[1], 50, 50);



    spaceship.onload = () => {
        ctx.drawImage(spaceship, pos[0], pos[1], 50, 50)
    }
    spaceship.src = "rocket.svg";
}

function turnSpaceship(canvas, ctx) {
    let radians = angle * Math.PI / 180;
    ctx.save();

    ctx.translate(pos[0], pos[1]);
    ctx.rotate(radians);
    ctx.drawImage(spaceship, pos[0], pos[1], 50, 50)

    ctx.restore();
}


function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    })
}
