/*
Author: Leon Luethi
Tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
*/

let numberToShow = 7;
/*
 * Index is as on wiki described clockwise. E.g.: a = 0, b = 1, ...
 */
let segments = [];


/**
 * Executed automatically as soon as the page is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site fully loaded");
    resetSegments()
    draw();
})

/**
 *
 */
function draw() {
    const canvas=  document.getElementById('display')
    const context = canvas.getContext("2d");

    segmentMapper();
    drawSegment(context);



}

function resetSegments() {
    for (let i = 0; i < 7; i++) {
        segments[i] = false;
    }
}

/**
This function maps the desired number to the segments to display.
In other words computes, which segments have to be shown to display the number.
 */
function segmentMapper() {
    resetSegments();
    switch (numberToShow) {
        case 0:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            segments[3] = true;
            segments[4] = true;
            segments[5] = true;
            break;
        case 1:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 2:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 3:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 4:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 5:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 6:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 7:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 8:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
        case 9:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            break;
    }
}


function drawSegment(context) {
    const startX = 20;
    const startY = 20;

    // Segment a
    context.fillStyle = segments[0] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20,startY, 80, 20);

    // Segment b
    context.fillStyle = segments[1] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20 + 80,startY + 20, 20, 80);

    // Segment c
    context.fillStyle = segments[2] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20 + 80,startY + 20 + 20 + 80, 20, 80);

    // Segment d
    context.fillStyle = segments[3] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20,startY + 20 + 20 + 80 + 80, 80, 20);

    // Segment e
    context.fillStyle = segments[4] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX,startY + 20 + 20 + 80, 20, 80);

    // Segment f
    context.fillStyle = segments[5] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX,startY + 20, 20, 80);

    // Segment g
    context.fillStyle = segments[6] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20,startY + 20 + 80, 80, 20);
}


