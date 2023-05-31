
document.body.style.background = "grey"

let titulo = document.getElementById('titulo')

titulo.style.background = "red"
titulo.style.color = "white"
titulo.style.textAlign = 'center'
titulo.style.borderBottom = 'solid 3px #000';

let chocolate = document.getElementsByClassName("chocolate");
for(var i = 0; i <chocolate.length; i++){
    chocolate[i].style.fontWeight = "bold"
}

let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = 'pink';
    else li[i].style.backgroundColor = 'white';
}

let paragrafo = document.getElementsByName('paragrafo')
paragrafo[0].style.background = "blue"
paragrafo[0].style.borderBottom = "solid 2px #000"

let morango = document.getElementById("morango")
morango.remove();

let lista = document.getElementById("lista")
let limão = document.getElementById("limão")
let Ovomaltine = document.getElementById("Ovomaltine")

let itemRecuperado = lista.removeChild("Ovomaltine")
itemRecuperado.textContent = 'OIE NEGO';
lista.insertBefore(itemRecuperado, limão.nextSibling);






