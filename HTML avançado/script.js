let image = document.getElementById("like");

/*image.addEventListener("click", function(){

    let lastimage = img.getAttribute()
    image.setAttribute("src","likevermelho.png")
})*/

/*image.addEventListener("click", function(){

    image.setAttribute("cor","vermelho")

})*/

let lista = document.getElementById("lista");

lista.dataset.n = "4"
let id = lista.dataset.id;

let num = parseInt(lista.dataset.n);

let conteudo = ""

for (let i = 0; i < num; i++) {
    conteudo += "<li>" + i + "</i>";
    
}

lista.innerHTML = conteudo