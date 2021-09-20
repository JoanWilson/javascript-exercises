//Declarar Variáveis
let qtdAdult = document.getElementById("adult")
let qtKid = document.getElementById("kid")
let timer = document.getElementById("time")
let result = document.getElementById("resultado")

function calcular(){
    if (timer.value <= 6){
        var price = 16*qtdAdult.value + 16*(qtKid.value/2)+7*qtdAdult.value+4*qtKid.value
    } else{
        var price = 20*qtdAdult.value + 20*(qtKid.value/2)+16*qtdAdult.value+8*qtKid.value
    }
    result.innerHTML = `<p>Você irá gastar ${price} reais!</p>`
}