/*
okmen tommy
*/
/** @type {CanvasRenderingContext2D} */
let context;

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context = canvas.getContext('2d');

alert("start");
signature(50, 50, 50);

function signature(x, y, size) {

    context.fillStyle = "black";
    context.fillRect(x + 425, y + 250, 300, 300);
    context.fillStyle = "cyan"


    context.fillRect(x + 550, y + 250, size, size);
    context.fillRect(x + 500, y + 300, size, size);
    context.fillRect(x + 450, y + 300, size, size);
    context.fillRect(x + 600, y + 300, size, size);
    context.fillRect(x + 650, y + 300, size, size);
    context.fillRect(x + 550, y + 300, size, size);

    context.fillRect(x + 550, y + 350, size, size);
    context.fillRect(x + 500, y + 500, size, size);
    context.fillRect(x + 500, y + 450, size, size);
    context.fillRect(x + 500, y + 400, size, size);
    context.fillRect(x + 550, y + 400, size, size);
    context.fillRect(x + 600, y + 400, size, size);
    context.fillRect(x + 600, y + 450, size, size);
    context.fillRect(x + 600, y + 500, size, size);



}