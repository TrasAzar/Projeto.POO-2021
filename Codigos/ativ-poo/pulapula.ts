// class Kid{
//     id: string;
//     idade: number;
//     constructor(id: string, idade: number){
//         this.id = id;
//         this.idade = idade
//     }
// }

// class pulapula{
//     brincando : Array <Kid | null>
//     esperando : Array <Kid | null>
//     constructor(){
//         this.brincando = []
//         this.esperando = []
//         }
    
//     entrada(kid: Kid){
//         this.esperando.push(kid)
//     }

//     in(){
//         this.brincando.push(this.esperando[0])
//         this.esperando =this.esperando.slice(1, this.esperando.length);
//     }
//     out(){
//         this.esperando.push(this.brincando[0])
//         this.brincando = this.brincando.slice(1, this.brincando.length);
//     }

//     removeKidE(id: string, vetor: Array <Kid>){
//         let index = 0;
//         let encontrou = false;
//         for(let k=0; k < vetor.length; k++){
//             if(vetor[k].id === id){
//                 index = vetor.indexOf(vetor[k])
//                 encontrou = true;
//             }
//         }
//         if(encontrou){
//             vetor.slice(index, 1)
//             return true;
//         }else{
//             return false;
//         }
//     }


// toString(){
//     console.log("fila:");
//     let saida = ""
//     for(let n = 0; n < this.esperando.length; n++){
//         saida += this.esperando[n].id + ":" + this.esperando[n].idade + " "
//     }
//     return saida;
// }
// }