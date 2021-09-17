//Como funciona var, let e const?

var numero 1 = 5;
//variável normal

const numero 3 = 6;
//A constante não pode ser reatribuida, mas pode ser mudada
numero3 = 7 //Erro!
const numero3 = [6];
numero2.push(2);
//Com objetos
const numero3 = {};
numero3.nome = "Joan"

//A diferença do var para o let é o escopo!
let numero2 = 7;

{
    var a = 1;
    let b = 2;
    const c = 3;
    //Erro ao imprimir b e c
}
//Uma vez criada a var, ela é acessivel em qualquer lugar, pois é uma variável global, já o let, não é!

