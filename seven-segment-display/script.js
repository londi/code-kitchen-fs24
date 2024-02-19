/*
Author: Leon Luethi
 */

// Executed automatically as soon as the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site fully loaded");
    const canvas=  document.getElementById('display')
    const context = canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(20,20, 20, 20);
})

