class moto{
    pessoa: Pessoa;
    power: number;
    time: number;

    constructor()
}

class Pessoa {
    idade : number;
    nome : string;
    constructor(nome: string, idade: number){
        this.idade = idade;
        this.nome = nome;
    }

    toString(): string{
        return "Pessoa: " + this.nome + this.idade;
    }
}

let pessoa = new Pessoa("Carlinhos", 5);
console.log(pessoa);