
interface Msg{
    getSender(): string;
    getContent(): string;
}
// // salvar, obter e enviar mensagens
// class User{
//     user: string;
//     inbox: Msg[];
//     sent: Msg[];

//     getInbox(): string;
//     getSent(): string;
//     sendMsg(receiver: User, msg: string){
//         //criar o objeto msg
//         //colocar essa mensagem no inbox do destinatario
//         //colocar essa mensagem no sent do emissor
//         receiver.inbox.push(msg);
//         this.sent.push(msg);  
//     }
// }
// // obter, cadastras e remover usuarios
// //solicitar o envio das mensagens
// class UserManager {
//     - users: Map<string, User>; 

//     + cadastrar(user: string)
//     + obter(user: string): User
//     + enviarMsg(user: string, destino: string, msg: string){
//         let senderUser = this.obter(sender);
//         let receiverUser = this.obter(receiver);
//         senderUser.enviarMsg(receiverUser, msg);
//     }
// }