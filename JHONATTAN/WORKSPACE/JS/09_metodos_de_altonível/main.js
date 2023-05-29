const numeros = [17, 43, 8, 4, 97, 56, 29];

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(numero + ' é par');
  } else {
    console.log(numero + ' é ímpar');
  }
});



const numeros2 = [17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61];

const valoresFiltrados = numeros.filter(numero => numero >= 20 && numero <= 80);

console.log(valoresFiltrados);

