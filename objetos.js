//Formas de criar um novo objeto
//Primeira
var pessoa = {
    nome:"Joan",
    sobrenome:"Oliveira",
    idade: 24
}

console.log(pessoa)

//Segunda
function obj(nome,sobrenome,idade){
    return {nome:nome, sobrenome:sobrenome, idade:idade}
}

var pessoa = obj("Joan","Oliveira",24)

console.log(pessoa)

//Terceira
function obj(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

var pessoa = new obj("Joan","Oliveira", 24);

console.log(pessoa)