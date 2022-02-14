class Client{
    private clientid: string;
    private accounts: Map<number, Account>

   constructor(clientid: string){
        this.clientid = clientid;
        this.accounts = new Map<number, Account>();
   }

    addAccount(conta: Account){
        if(this.accounts.has(conta.getId())){
            return;
        }
        this.accounts.set(conta.getId(), conta)
    }

   getAccounts(){
       return this.accounts
   }

   getClientId(){
       return this.clientid
   }

   toString(){
        let saida = `${this.clientid} `;
        saida += "[ ";
        for(let conta of this.accounts.values()) {
            saida += `${conta.getId()} `;
        }
        saida += "]"
        return saida;
   }
}

abstract class Account {
    protected balance: number;
    protected clientId: string;
    protected id: number;
    protected type: string;

    constructor(id: number, clientid: string){
        this.id = id;
        this.clientId = clientid;
        this.balance = 0;
        this.type = "";
    }

    abstract monthlyUpdate(): void;

    depositValue(value: number){
        this.balance += value;
    }

    transfer(other: Account, value: number){
        if(value > this.balance) {
            console.log("Saldo insuficiente")
            return;
        }
        this.balance -= value;
        other.depositValue(value);
        
    }

    withdraw(value: number){
        if(value > this.balance) {
            console.log("Saldo insuficiente")
            return;
        }
        this.balance -= value;
    }

    getId(){
        return this.id;
    }

    toString() {
        let saida = `${this.id}:${this.clientId}:${this.balance}:${this.type}`;
        return saida; 
    }
}


class SavingAccount extends Account {
    constructor(id: number, clientId: string) {
        super(id, clientId);
        this.type = "CP";
    }

    monthlyUpdate(): void {
        this.balance = (101*this.balance) / 100;
    }
}

class CheckingAccount extends Account {
    constructor(id: number, clientId: string) {
        super(id, clientId)
        this.type = "CC";
    }

    monthlyUpdate(): void {
        this.balance -= 20;
    }
}



class BankAgency{
    private accounts: Map<number, Account>
    private clients: Map<String, Client>
    private nextAccount: number

    constructor(){
        this.accounts = new Map<number, Account>();
        this.clients = new Map<String, Client>();
        this.nextAccount = 0;
    }

    addCliente(idClient: string){
        if(this.clients.has(idClient)){
            return;
        }
        let cliente = new Client(idClient);
        let checkingAccount = new CheckingAccount(this.nextAccount, idClient);
        let savingAccount = new SavingAccount(this.nextAccount + 1, idClient);

        cliente.addAccount(checkingAccount);
        cliente.addAccount(savingAccount);

        this.accounts.set(this.nextAccount, checkingAccount);
        this.accounts.set(this.nextAccount + 1, savingAccount);

        this.clients.set(idClient, cliente);

        this.nextAccount += 2;
    }

    deposit(accountId: number, value: number){
        if(this.accounts.has(accountId)){
            this.accounts.get(accountId)?.depositValue(value)
        }
    }
    monthlyUpdate(){
        for(let account of this.accounts.values()) {
            account.monthlyUpdate();
        }
    }
    transfer(contaDeId: number, contaParaId: number, value: number){
        if(this.accounts.has(contaDeId) && this.accounts.has(contaParaId)){
            let contaDe = this.accounts?.get(contaDeId);
            let contaPara = this.accounts?.get(contaParaId);

            if (contaPara !== undefined) {
                contaDe?.transfer(contaPara, value);
            }
        }
    }
    withdraw(idConta: number, value: number){
        if (this.accounts.has(idConta)) {
            this.accounts.get(idConta)?.withdraw(value);
        }
    }

    toString(){
        let saida = "Clients:\n";
        for (let client of this.clients.values()) {
            saida += `- ${client.toString()}\n`
        }
        saida += 'Accounts:\n'
        for (let account of this.accounts.values()) {
            saida += `${account.toString()}\n`
        }

        return saida;
    }
}

let agencia = new BankAgency();
agencia.addCliente('Almir');
agencia.addCliente('Julia');
agencia.addCliente('Maria');

agencia.deposit(1, 200);
agencia.deposit(3, 100);
agencia.deposit(5, 600);


agencia.transfer(1, 3, 50);

agencia.withdraw(5, 250);

agencia.monthlyUpdate();

console.log(agencia.toString());