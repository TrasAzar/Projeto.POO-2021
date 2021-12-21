 class Contato{
    constructor(public nome: string){ }
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