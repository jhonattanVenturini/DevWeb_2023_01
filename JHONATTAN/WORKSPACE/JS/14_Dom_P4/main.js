let nome = document.getElementById('nome').value;
let dataNasc = document.getElementById('dataNasc').value;
let email = document.getElementById('email').value;


let inscritos = [];
function validarEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}
function CalcularIdade(dataNasc) {
    const hoje = new Date()
    const dataNascimento = new Date(dataNasc)
    let idade = hoje.getFullYear() - dataNascimento.getFullYear()
    const mes = hoje.getMonth() - dataNascimento.getMonth()
    if (mes < 0 || mes === 0 && hoje.getDate() < dataNascimento.getDate()) {
        idade--;
    }
    return idade;
}
