// Array e Obejtos

const aluno = [
    {
        nome: "Ana",  
      idade: 17,
      Nota: 8,
      ano: "2°B",
    },
   {
        nome: "Brunno", 
    idade: 16,
    Nota: 6,
    ano: "2°C",
    },
  {
        nome: "Veronica",  
    idade: 16,
    Nota: 9,
    ano: "2°C",
    },
  {
        nome: "Marta",  
    idade: 15,
    Nota: 5,
    ano: "3°C",
    },
  {
        nome: "Brenno", 
    idade: 19,
    Nota: 6,
    ano: "3°C",
    },
  {
        nome: "Maria",  
    idade: 14,
    Nota: 4,
    ano: "1°F",
    }
];

console.log(aluno)
const alunoBrunno = aluno.find(item =>item.nome === 'Brunno');
console.log(alunoBrunno)

const alunoMaria = aluno.find(item => item.nome === 'Maria').Nota;
console.log(alunoMaria)

const alunoJSon = JSON.stringify(aluno)
console.log(alunoJSon)