class   Fone{
    private id: string;
    private numero: string;
    constructor(id: string, numero: string){
        this.id = id;
        this.numero = numero;
    }

    getId(){
        return this.id;
    }

    getNumero(){
        return this.numero;
    }

    NumValido(numero: string){
        let caracters = "0123456789()." .split("")
        for(let c= 0; c < numero.length; c++){
            if(numero.includes(caracters[c]) === false){
                return false;
            }
        }
            return true;
    }
}

class Contato{
    private nome: string;
    private telefone: Array  <Fone | null>
    constructor(nome: string, array:Fone[] ){
        this.nome = nome;
        this.telefone = array;       
    }

    AddFone(fone: Fone){
        this.telefone.push(fone);     
    }
    RemFone(index: number){    
        this.telefone = this.telefone.slice(index, 1) 
    }

    ToString(){
        let agenda: string = this.nome + " "
        console.log(this.nome)
        for(let n=0; n < this.telefone.length; n++){
            agenda += ` ${n}:${this.telefone[n].getId()}:${this.telefone[n].getNumero()} `
        }
    }
}