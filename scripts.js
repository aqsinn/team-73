/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Starts in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();

    for (let counter = 1; counter < 360; counter++) {
        moveForward(counter**1.02, context); // Increases distance each time
        context.stroke();
        turnRight(79); // Turns right to create intersections
    }
}
