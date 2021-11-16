// class Pessoa{
//     nome: String;
//     construcotr(nome: string){
//         this.nome = nome;
//     }
//     public toString(){
//         return this.nome;
//     }
// }
// class Banco{
//     caixas:Array<Pessoa | null>;
//     espera: Array<Pessoa>;

// constructor(qtdCaixas: number){
//     this.caixas = [];
//     this.espera = [];
//     }
// }
//  public toString(){
//      let str = "[";
//     for (let i - 0; i < this.caixas.lenght; i++){
//         let pessoa = this.caixas[i];
//         str += i + "; ";
//         if(pessoa == null){
//             str += "vazio";
//         }else{
//             str += pessoa.toString();
//         }
//         str += pessoa.toString();
//         }
//         str += pessoa !== null ? pessoa.toString() : "null";
//         str += " | ";
//     }
//     str += "\n";
//     for(let i = 0; i < this.espera.length;i++){
//         str += this.espera [i].toString() + "";
//     }
//  }

class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    public toString() {
        return this.nome;
    }
}

class Banco {
    caixas: Array<Pessoa | null>;
    espera: Array<Pessoa>;

    constructor(qtdCaixas: number) {
        this.caixas = []; //length 0
        for (let i = 0; i < qtdCaixas; i++) {
            this.caixas.push(null);
        }
        this.espera = [];
    }

    //coloca a pessoa na fila de espera
    chegarPessoa(pessoa: Pessoa): void {

    }

    //se o caixa estiver vazio, pega a primeira pessoa da fila de espera
    chamarNoCaixa(caixa: number): boolean {
        return false;
    }

    //se o caixa estiver ocupado, retira a pessoa do caixa
    finalizarAtendimento(caixa: number): boolean {
        return false;
    }

    public toString() {
        let str = "caixas: | ";
        for (let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            str += i + ": ";
            //str += pessoa !== null ? pessoa.toString : "----";
            if (pessoa == null) {
                str += "vazio";
            } else {
                str += pessoa.toString();
            }
            str += " |";
        }
        str += "\nespera: ";
        for (let pessoa of this.espera) {
            str += pessoa.toString() + " ";
        }
        return str;
    }
}

let banco = new Banco(3);
console.log("" + banco);
banco.chegarPessoa(new Pessoa("Joao"));
console.log("" + banco);
banco.chegarPessoa(new Pessoa("Ricardo"));
banco.chegarPessoa(new Pessoa("Ricardo"));
banco.chamarNoCaixa(0);