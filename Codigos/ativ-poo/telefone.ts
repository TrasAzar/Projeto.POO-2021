class  Fone{
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

class Agenda{
    contatos: Map<string, Contato>;

     Agenda(){
    this.contatos = new Map<string, Contato>();
     }

    adicionaContato (contato: Contato){
        if(this.contatos.has(contato.nome)){
            let existente = this.contatos.get(contato.nome);
            for(let fone of contato.fones){
                existente.AddFone(fone);
            }
        }else{
            this.contatos.set(contato.nome, contato);
            }
        }

        acharContato(nome: string){
            if(this.contatos.has(nome)){
                return this.contatos.get(nome);
            }
            return null;
        }

        removerContato(nome: string){
            if(this.contatos.delete(nome))
            return true
            // }else{
            return false
        }

        Busca(padrao): Array<Contato> {
            let result = new Array<Contato>();
            for(let contato of this.contatos.values()){
                if(contato.nome.includes(padrao)){
                    result.push(contato);
                }
                return;
            }

        }
        
            
        
        lista(){
            return this.contatos
        }

    }
   
    

    // getContato(){
    //     return this.id;
    // }

    // AddAgenda(fone: Fone, contato: Contato){
    //     this.contato.get
    // }

   
    // Agenda(){
    // let label = new Map<number, string>();

    // Contato.set();
    // Contato.set();
    // Contato.set();
    // }
    
