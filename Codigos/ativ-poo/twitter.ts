class Usuario {
    private username: string;
    private inbox: Inbox;
    private followers: Map<string, Usuario>
    private following: Map<string, Usuario>

    constructor(username:string){
        this.followers = new Map<string, Usuario>();
        this.following = new Map<string, Usuario>();
        this.username = username;
        this.inbox = new Inbox();
    }

    //---------------follow------------//
    follow(other: Usuario){
        if (!this.following.has(other.getUserName())) {
            return;
        }

        this.following.set(other.getUserName(), other);
    }
    //---------------twittar------------//
    sendTweet(tw: Tweet){
        this.inbox.getTimeline().set(tw.getId(), tw);
        this.inbox.getMyTweets().set(tw.getId(), tw);

        for (let user of this.followers.values()) {
            user.getInbox().getTimeline().set(tw.getId(), tw);
        }
    }
    //---------------unflollow------------//
    unfollow(other: string){
        if (this.following.has(other)) {
            this.following.delete(other);
        } else {
            console.log(`${other} nao existe`)
        }
    }

    unfollowAll(){
        for (let user of this.following.values()) {
            user.unfollow(this.username);
        }

        this.following.clear();
    }

    rejectAll(){
        for (let user of this.followers.values()) {
            user.following.delete(this.username);
        }

        this.followers.clear();
    }

    like(idTw: number){
        if(this.inbox.getTimeline().has(idTw)) {
            this.inbox.getTimeline().get(idTw)?.like(this.username);
        } else {
            console.log("Tweet nao existe")
        }
    }

    getUserName(){
        return this.username
    }

    getInbox(): Inbox {
        return this.inbox;
    }

    toString(): string{
        let saida = `${this.username}\n`;
        saida += "\tseguidos   [ ";
        
        let countLast = 0;
        for (let user of this.following.values()) {
            if (countLast >= this.following.size - 1) {
                saida += `${user.getUserName()} `;
            } else {
                saida += `${user.getUserName()}, `;
            }
            countLast += 1;
        }

        saida += "]\n";
        saida += "\tseguidores [ ";
        countLast = 0;

        for (let user of this.followers.values()) {
            if (countLast >= this.following.size - 1) {
                saida += `${user.getUserName()} `;
            } else {
                saida += `${user.getUserName()}, `;
            }
            countLast += 1;
        }
        saida += "]";

        return saida; 
    }

   
}

class Tweet{
    private id: number;
    private username: string;
    private msg: string;
    private likes: Set<string>
    // private rt: Tweet;
    private isDeleted: boolean;

    constructor(id: number, username: string, msg: string){
        this.id = id;
        this.username = username;
        this.msg = msg;
        this.likes = new Set<string>();
        this.isDeleted = false;
    }
    
    getId(): number {
        return this.id;
    }
    
    getUsername(): string{
        return this.username;
    }
    
    getMsg(): string{
        return this.msg;
    }

    //---------------Like------------//
    like(username: string){
        this.likes.add(username);
    }
    
    getLikes(): Set<string>{
        return this.likes;
    }
    //---------------retweet------------//
    setRt(tw: Tweet){
        
    }
    //---------------remover------------//
    setDeleted(value: boolean){
        this.isDeleted = value;
    }
    
    getIsDeleted(): boolean{
        return this.isDeleted;
    }

    toString(): string{
        let saida = `${this.id}:${this.username} (${this.msg})`
        return saida;
    }
}

class Inbox{
    private timeline: Map<number, Tweet>
    private myTweets: Map<number, Tweet>

    constructor(){
        this.timeline = new Map<number, Tweet>();
        this.myTweets = new Map<number, Tweet>();
    }

    storeInTimeline(tweet: Tweet){
        if(!this.timeline.has(tweet.getId())){
            return;
        }
        this.timeline.set(tweet.getId(), tweet)
    }

    storeInMyTweets(tweet: Tweet) {
        if (!this.myTweets.has(tweet.getId())) {
            return;
        }
        this.myTweets.set(tweet.getId(), tweet);
    }

    rmMsgsFrom(username: string){
        let tweetsId = [];

        for (let tweet of this.timeline.values()) {
            if (tweet.getUsername() === username) {
                tweetsId.push(tweet.getId());
            }
        }

        for (let id of tweetsId) {
            this.timeline.delete(id);
        }
        
    }
   
    getMyTweets(): Map<number, Tweet>{
        return this.myTweets
    }

    getTimeline(): Map<number, Tweet>{
        return this.timeline;
    }

    getTweet(id: number): Tweet{
        if (!this.myTweets.has(id)) {
           console.log("tweet nao existe")
        }

        let tweet = this.myTweets.get(id);

        if (tweet !== undefined) {
            return tweet;
        } else {
            return new Tweet(-1, "", "");
        }
    }

    toString(): string {
        let saida = "";

        for (let tweet of this.timeline.values()) {
            saida += `${tweet.toString()}\n`
        }

        return saida;
    }
}

class Controle{
    private users: Map<string, Usuario>
    private tweets: Map<number, Tweet>
    private nextTweetId: number;

   
    constructor(){
        this.users = new Map<string, Usuario>();
        this.tweets = new Map<number, Tweet>();
        this.nextTweetId = 0;
    }

    addUser(username: string){
        if (!this.users.has(username)) {
            console.log(`${username} nao existe`)
            return;
        }

        this.users.set(username, new Usuario(username));
    }
    //---------------twittar------------//
    private createTweet(sender: string, msg: string): Tweet{
        let newTweet = new Tweet(this.nextTweetId, sender, msg);
        this.tweets.set(newTweet.getId(), newTweet);
        this.nextTweetId += 1;
        return newTweet;
    }

    sendTweet(username: string, msg: string) {
        if (!this.users.has(username)) {
            console.log(`${username} nao existe`)
            return;
        }

        let userName = this.getUsuario(username)?.getUserName();
        let tweet = this.createTweet(userName, msg);
        this.getUsuario(username)?.sendTweet(tweet);
    }

    getUsuario(username: string): Usuario {
        if (!this.users.has(username)) {
            console.log(`${username} nao existe`)
            return;
        } 
        
        if (this.users.get(us))
        return this.users.get(username)
    }
   
    //---------------retweet------------//
    sendRt(username: string, twId: Int16Array, rtMsg: string){
    }
    //---------------remover------------//
    rmUsuario(username: string){
        if (this.users.has(username)) {
            this.users.delete(username);
        } else {
            console.log(`${username} nao existe`)
        }
    }

    toString(): string {
        let saida = ""

        for (let user of this.users.values()) {
            saida += user.toString();
        }

        return saida;
    }

}

let controller = new Controle();
controller.addUser("goku")
controller.addUser("sara")
controller.addUser("tina")

controller.getUsuario("goku").follow(controller.getUsuario("sara"))
controller.getUsuario("goku").follow(controller.getUsuario("tina"))
controller.getUsuario("sara").follow(controller.getUsuario("tina"))

console.log(controller.toString())
