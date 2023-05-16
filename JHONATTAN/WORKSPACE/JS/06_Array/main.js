var abraao = true // string
var grimaldofrango = [true, 171, "Gabriel", 3.14, "Frango"]
console.log(abraao)
console.log(grimaldofrango[2])
console.log(grimaldofrango[3])
console.log(grimaldofrango)

// boolean
// numerico 
// numero ponto flutuante

console.clear()
const turma = [
    ["turma 1", "Gabriel", 7],
    ["turma 1", "Carina", 10],
    ["turma 2", "Felipe", 9]
]
console.log(turma)
turma[1][1] ="Jhonattan";
console.log(turma)

console.log(turma.toString())

var atrasado = ["Mateus","Abraao","Erick","Jhonattan"]
console.log(atrasado.join("*"))
console.log(atrasado.length)
let atrasados2 = atrasado.pop()
console.log(atrasados2)


let atrasados3 = atrasado.push("fequer")
console.log(atrasados3)
console.log(atrasado)

// Shift - remove o primeiro elemento do Array
console.clear(atrasado)
let atrasados4 = atrasado.shift();
console.log(atrasados4)
console.log(atrasado)

// UNShift - insere o primeiro elemento do Array

let atrasados5 = atrasado.unshift("Adrielly")
console.log(atrasados5)
console.log(atrasado)

// Deletar o array determinado

delete atrasado [1]
console.log(atrasado)








