//Datas são objetos
//Formas de criá-las

//Primeira (Retorna a data do seu computador)
var d = new Date();
console.log(data);

//Segunda
var d = new Date(2021, 08, 12, 09,09);
console.log(d);

//Se somente colocar o "ano" como paramentro, a função irá entender o ano como milissegundos
var d = new Date(2021);
console.log(d);

//Terceira
var d = new Date("sep 17 2021 09:14");
console.log(d);

//Quarta
var days = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"];
console.log(dias[d.getDay()])
console.log(dias[d.getHours()])
console.log(dias[d.getSeconds()])
console.log(dias[d.getMilliseconds()])
console.log(dias[d.getMonth()])
console.log(dias[d.getTime()])//Retorna o valor de Milissegundos totais
//Se trocar get por set, também dará certo, mas set serve para mudar!
console.log(dias[d.setDate()])
console.log(dias[d.setHours()])