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
}

class Tweet{
    private id: number;
    private username: string;
    private msg: string;
    
    constructor(){

    }
}

class Inbox{
    private timeline: Map<number, Tweet>
    private myTweets: Map<number, Tweet>
}