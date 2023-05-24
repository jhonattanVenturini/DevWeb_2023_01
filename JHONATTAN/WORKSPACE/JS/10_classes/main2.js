// Definindo a classe Pessoa
class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }

    // Método para calcular a idade da pessoa
    getIdade() {
        const hoje = new Date(); 
        const anoAtual = hoje.getFullYear(); // 2023
        const mesAtual = hoje.getMonth(); // maio
        const diaAtual = hoje.getDate(); // 23/05/2023

        const anoNascimento = this.dataNascimento.getFullYear();
        const mesNascimento = this.dataNascimento.getMonth();
        const diaNascimento = this.dataNascimento.getDate();

        let idade = anoAtual - anoNascimento;

        // Verificar se ainda não fez aniversário no ano corrente
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    }
}
// Adicionando o método getNiver() por prototype
Pessoa.prototype.getNiver = function () {
    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    const mesNascimento = this.dataNascimento.getMonth();
    const diaNascimento = this.dataNascimento.getDate();

    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
        return true; // Já fez aniversário
    } else {
        return false; // Ainda não fez aniversário
    }
};

// Criando o array de pessoas
const pessoas = [];

// Instanciando a classe Pessoa em cada índice do array
pessoas[0] = new Pessoa("Julio", new Date(1997, 11, 12)),
pessoas[1] = new Pessoa("Bruna", new Date(1952, 01, 10)),
pessoas[2] = new Pessoa("Cleiton", new Date(1995, 07, 29)),
pessoas[3] = new Pessoa("Luisa",new Date(2001,07,20)),
pessoas[4] = new Pessoa("Jhonattan",new Date(2002,07,20)),
pessoas[5] = new Pessoa("Vanessa",new Date(2015,07,15)),
pessoas[6] = new Pessoa("Evaristo",new Date(1980,08,04)),
pessoas[7] = new Pessoa("Eliane",new Date(1930,12,31)),
pessoas[8] = new Pessoa("Erick",new Date(2000,09,20)),
pessoas[9] = new Pessoa("Flávio",new Date(1970,12,01)),
pessoas[10] = new Pessoa("Noah",new Date(2020,08,05));

// ... instanciar as demais pessoas do array

// Exibindo os resultados para cada pessoa do array
for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const fezAniversario = pessoa.getNiver() ? "já" : "ainda não";
    console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario} fez aniversário esse ano.`);
}

