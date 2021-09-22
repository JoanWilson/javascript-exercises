let tela = document.getElementById("tela");
let c = tela.getContext("2d")
c.moveTo(0,250)
let ab = 0;

function drawing(x,y) {
    c.lineTo(x,y)
    c.stroke()
    c.moveTo(x,y)
}
function cosseno(x) {
    return Math.cos(x)*25+250
}
setInterval(function () {
    drawing(ab+=5,cosseno(ab))
}, 30)
