// Array Unidimensional

var lista = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995]

console.log(lista)
console.log(lista.length)
console.log(lista[6])
console.log(lista.toString());
console.log(lista.join("/"))
console.log(lista.unshift("IOS"))
console.log(lista)
console.log(lista.length)

// Array Bidimensional

var lista2 = [
["HTML", 1993, "CSS", 1996],
["Bootstrap", 2011, "JS", 1995],
["React", 2013, "Java", 1995]
]

console.log(lista2)
console.log(lista2.length)

var lista3 = lista2[1][2]
console.log(lista3)

lista2[1][2] = "JavaScript"
console.log(lista2)

delete lista2[2][2]
console.log(lista2)

var metodoPush = lista2[2].push('pipoca')
console.log(lista2)



