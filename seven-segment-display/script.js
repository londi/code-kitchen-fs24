/*
Author: Leon Luethi
Tutorial: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
*/

let numberToShow = 0;
/*
 * Index is as on wiki described clockwise. E.g.: a = 0, b = 1, ...
 */
let segments = [];
let autoCount = false;

/**
 * Executed automatically as soon as the page is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site fully loaded");
    resetSegments()
    draw();

    document.getElementById('number-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            let numberRaw = document.getElementById('number-input').value;
            console.log('Enter pressed. Input value: ', numberRaw);

            // TODO: Check if input is valid
            if (numberRaw.length > 1) {
                alert('Eingabe ist ungültig. Bitte nur eine Ziffer eingeben');
            } else {
                numberToShow = parseInt(numberRaw);
                draw();
            }
        }
    });
})

async function doAutoCount() {
    autoCount = !autoCount;
    if(autoCount) {
        document.getElementById('autocount-button').classList.add('active')
    } else {
        document.getElementById('autocount-button').classList.remove('active')
    }
    draw()
}

/**
 *
 */
async function draw() {
    const canvas = document.getElementById('display')
    const context = canvas.getContext("2d");

    if(autoCount) {
        while (autoCount) {
            segmentMapper();
            drawSegment(context);
            console.log("Number to show: " + numberToShow);
            await delay(1000);
            numberToShow = numberToShow < 9 ? numberToShow + 1 : 0;
        }
    } else {
        segmentMapper();
        drawSegment(context);
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    })
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
            segments[1] = true;
            segments[2] = true;
            break;
        case 2:
            segments[0] = true;
            segments[1] = true;
            segments[3] = true;
            segments[4] = true;
            segments[6] = true;
            break;
        case 3:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            segments[3] = true;
            segments[6] = true;
            break;
        case 4:
            segments[1] = true;
            segments[2] = true;
            segments[5] = true;
            segments[6] = true;
            break;
        case 5:
            segments[0] = true;
            segments[2] = true;
            segments[3] = true;
            segments[5] = true;
            segments[6] = true;
            break;
        case 6:
            segments[0] = true;
            segments[2] = true;
            segments[3] = true;
            segments[4] = true;
            segments[5] = true;
            segments[6] = true;
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
            segments[3] = true;
            segments[4] = true;
            segments[5] = true;
            segments[6] = true;
            break;
        case 9:
            segments[0] = true;
            segments[1] = true;
            segments[2] = true;
            segments[3] = true;
            segments[5] = true;
            segments[6] = true;
            break;
    }
}


function drawSegment(context) {
    const startX = 20;
    const startY = 20;

    context.clearRect(0, 0, 150, 260);

    // Segment a
    context.fillStyle = segments[0] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20, startY, 80, 20);

    // Segment b
    context.fillStyle = segments[1] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20 + 80, startY + 20, 20, 80);

    // Segment c
    context.fillStyle = segments[2] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20 + 80, startY + 20 + 20 + 80, 20, 80);

    // Segment d
    context.fillStyle = segments[3] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20, startY + 20 + 20 + 80 + 80, 80, 20);

    // Segment e
    context.fillStyle = segments[4] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX, startY + 20 + 20 + 80, 20, 80);

    // Segment f
    context.fillStyle = segments[5] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX, startY + 20, 20, 80);

    // Segment g
    context.fillStyle = segments[6] ? "rgb(186,15,245)" : "rgba(186,15,245,0.15)";
    context.fillRect(startX + 20, startY + 20 + 80, 80, 20);
}


