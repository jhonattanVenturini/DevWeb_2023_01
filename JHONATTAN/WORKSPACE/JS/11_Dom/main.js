// DOM - Document

// objeto window - alerta de mensagem na tela da web
console.log(document);
window.alert('Olá alunos');
alert('Olá alunos2');

confirm("cancelar | seguir") // caixa de 
prompt('Olá amigo,vc é um amigo!! Preenche essa porra') // mensagem que o cliente coloca 

console.clear();
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = "Socorro Deus";
// Criar um elemento <h1>
let heading = document.createElement('H1');

heading.innerHTML = 'Olá alunos!';
document.body.appendChild(heading)
