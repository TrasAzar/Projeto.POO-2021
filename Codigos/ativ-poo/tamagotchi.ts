class Pet{
    private nome: string;
    private saciedade: number;
    private saciedadeMax: number;
    private vivo: boolean = true;
    private energy: number;
    private energyMax: number;
    private dormir: boolean = false;
    constructor(nome: string, saciedadeMax: number, energyMax: number){
        this.setNome(nome)
        this.saciedade = saciedadeMax;
        this.saciedadeMax = saciedadeMax;
        this.energy = energyMax;
    }

     public setNome(nome: string){
         if( nome.length == 0){
             this.nome = "coisa"
         }else{
        this.nome = nome;
    }
}
     public getNome(): string{
        return this.nome;
    }

    public getSaciedade(): number{
        return this.saciedade
    }

    public setSaciedade(saciedade: number){
        if(saciedade < 0){
            this.saciedade = 0
            this.vivo = false;
            write("comeu demais!\n");
        }
        else if(saciedade> this.saciedadeMax){
            this.saciedade = this.saciedadeMax
            write("comeu demais!\n");
        }else{
            this.saciedade = saciedade;
        }

        public getEnergy(): number{
            return this.energy
        }
    
        public setEnergy(energy: number){
            if(energy < 0){
                this.dormir = true;
            }
            else{
                this.dormir = false;
            }
    }

        public brincar(): void{
            this.setSaciedade(this.getSaciedade() - 1);
        }
        
        public comer(): void{
            this.setSaciedade(this.getSaciedade() + 1);
        }

    public toString(){
        if(this.vivo)
        return this.nome + ":" + this.saciedade + "|" + this.saciedadeMax;
        return "O bichinho morreu T_T"
    }
}


class ID{
function criar_pet(): Pet{
    write("digite o nome do pet: ");
    let nome = input();
    write("Digite o maximo de saciedade: ");
    let saciedademAX = +input();
    let pet = new Pet(nome, saciedadeMax);
    return pet
}
    help(){
        write ("Comandos:\n"):
        write ("init: cria um novo pet:\n"):
        write ("play: faz o pet brincar:\n"):
        write ("show: mostra o pet:\n"):
        write ("eat: faz o pet comer:\n"):
        write ("end: sai do progama:\n"):
    }
function shell(){
    let pet = create_pet();
    }
}