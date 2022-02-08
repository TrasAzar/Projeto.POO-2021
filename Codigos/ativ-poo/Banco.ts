class Client{
    private clientid: string;
   private account: Map<string, Account>

   constructor(clientid: string){
       this.clientid = clientid;
   }

   addAccount(account: Account): void{

   }

   toString(){

   }
}

interface CheckAccount{
    savingAccount(id: Int16Array, idClient: string)
    monthlyUpdate()
    toString():String;
}

interface SaveAccount{

}

class Account implements SaveAccount, CheckAccount{
    private balance: number;
    private clientid: string;
    private id: number;
    private type: string;

    constructor(id: number, clientid: string){
        this.id = id;
        this.clientid = clientid;
    }

    depositvalue(value: number)
}