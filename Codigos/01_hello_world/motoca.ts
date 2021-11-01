class Motoca{
    pessoa: Pessoa | null;
    potencia: number;
    tempo: number;
    constructor(){
        this.pessoa = null;
    }

    Buy(qtd): void{
        this.tempo += qtd;
    }
    Dirigir(tempo: number): boolean{
        if(this.pessoa == null){
            console.log("Moto vazia");
            return;
        }
        if (this.pessoa.idade > 10){
            console.log("criança muito grande pra motoca");
            return false;
        }
        if (this.tempo < tempo){
            console.log("tempo insuficiente");
            return false;
        }
        this.tempo -= tempo;
        return true;
    }

    montar(pessoa: Pessoa): boolean{
        if(this.pessoa === null){
            this.pessoa = pessoa;
            return true;
        }
        console.log("Moto lotada");
        return false;
    }
    desmontar(): Pessoa | null{
        if(this.pessoa === null){
            return null;
        }
        cconst pessoa = this.pessoa
        return pessoa;
    }

    buzinar(): string{
        let saida - "P";
        for(let i = 0; i < this.potencia; i++){
            saida += "e";
            return saida + "m"
        }
    }

    toString(): string{
        let nome = "vazio"
        if(this.pessoa != null)
            nome = this.pessoa.nome;
        return `[ ${nome}]`;        
    }
}

let motoca = new Motoca();
console.log(motoca.toString());


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

let ana = new Pessoa("Ana", 5);
console.log(ana.toString());