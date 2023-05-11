var notaMarcos = 5
var notaMaxima = 7
if(notaMarcos>= notaMaxima) //true
{
    console.log("Você foi Aprovado")
}
if (notaMarcos>= notaMaxima) {
    console.log("Você foi Reprovado")
} else {
    console.log("Você foi Reprovado")
}
// impar ou par
// se a sobra da divisão do número por 2 for
// se 1 esse número é impar
// se a sobra da divisão do número por 2 for
// se 0 esse número é par
// o número é par e maior que 10
// o número é par porém é menor 10 

var imparPar2 = 12

if(imparPar2 % 2 == 1 ){ 
    console.log("é impar")
} else{
    if(imparPar2 >10){
        console.log("o número é par e maior que 10")
    }
    else{
        console.log("o número é par porém é menor 10")
    }
}
var resultado = imparPar2 % 2 == 1 ? console.log("é impar") : console.log("é par")

// Se é maior que 7 apresento "Aprovado"
// Se é menor que 7 apresnta  "Reprovado"
// Se está entre 7 e 5 "Aprovado por Conselho"

if(6 > 7){
    console.log("Aprovado")
}  
else if (6 < 6.9 && 6 > 5){
    console.log("Aprovado por conselho")
}
else{
    console.log("Reprovado")
}
var notaMarcos = 5
switch(notaMarcos > 7){
    case true
    console.log("Aprovado")
    break;
    case false:
    console.log("Reprovado")
    break;

}