class Pessoa {
    constructor(public nome: string){}
}

class Cine {
    cadeiras: Map<number, Pessoa>;
    nomes: Map<String, number>;
    constructor(qtdCadeiras: number){
        this.cadeiras = new Map <Number, Pessoa>();
        this.nomes = new Map<string, number>();
    }

        procurarChave(nome: string) number{
            for(let [chave, pessoa] of this.cadeiras){
                if(pessoa.nome == nome){
                    return chave;
                }
            }
            return -1;
        }


    public reservar(chave: number, pessoa: Pessoa){
        if(this.cadeiras.has(chave)){
            console.log("Ocupado");
            return;
        }
        if(this.cadeiras.has(pessoa.nome)){
            console.log("No cinema");
            return;
        }
        this.cadeiras.set(chave, pessoa);
        this.nomes.set(pessoa.nome, chave);
    }
    public cancelar(nome: string){

    }
    public toSring(){
        let saida = "";
        for(let i = 0; i<this.qtdCadeiras; i++){
            if(this.cadeiras.has(i)){
                let pessoa = this.cadeiras.get(i);
                saida += pessoa.nome + " ";
            }else {
                saida += "- ";
            }
            }
        }
    }

    