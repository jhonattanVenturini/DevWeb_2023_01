// Função para calcular a média das notas
function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    var media = soma / notas.length;
    return media;
  }
  
  // Leitura das notas do aluno
  var notas = [];
  for (var i = 1; i <= 4; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    notas.push(nota);
  }
  
  // Cálculo da média
  var mediaAluno = calcularMedia(notas);
  
  // Exibição da média no console
  console.log("A média do aluno com as 4 notas é: " + mediaAluno.toFixed(2));
  