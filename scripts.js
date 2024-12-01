/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

 // Converts degrees to radians
function radian(degree) {
    return degree * Math.PI / 180; // Return the equivalent radians
}

// Moves the current position forward by a specified distance in the direction of the current angle
function moveForward(distance, context) {
    let a = radian(angle); // Convert the current angle to radians
    x = x + distance * Math.cos(a); // Update the x-coordinate based on the angle
    y = y + distance * Math.sin(a); // Update the y-coordinate based on the angle
    context.lineTo(x, y); // Draw a line to the new position
}

// Turns the current angle to the right by a specified degree
function turnRight(degree) {
    angle = angle - degree; // Decrease the angle to turn right
    if (angle < 0) angle = angle + 360; // Wrap around if the angle is negative
}

// Turns the current angle to the left by a specified degree
function turnLeft(degree) {
    angle = angle + degree; // Increase the angle to turn left
    if (angle > 360) angle = angle - 360; // Wrap around if the angle exceeds 360
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
