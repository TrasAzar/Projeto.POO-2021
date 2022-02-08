class Usuario {
    private username: string;
    private followers: Map<string, Usuario>
    private following: Map<string, Usuario>

    constructor(username:string){
        this.followers = new Map()
        this.following = new Map()
        this.username = username;
    }

}

class Controle{
    private users: Map<string, Usuario>
   
    constructor(){
        this.users = new Map()
    }

    addUser(username:string, IdUser): void{
        if(!this.users.has(IdUser)
    }

    }
}

