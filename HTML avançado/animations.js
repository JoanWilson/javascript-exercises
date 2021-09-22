let square = document.getElementsByClassName('square')[0];

let xposition = 0;
let yposition = 0;

function move(x,y) {
    let movex = x + "px"
    let movey = y + "px"
    square.style.top = movex
    square.style.bottom = movey
}

setInterval(function () {
    move(xposition++, yposition++)
}, 20);