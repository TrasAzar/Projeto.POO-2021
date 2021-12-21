let show = (lista: any[]) => console.log("[" + lista.join(", ")+ "]");
let lista: Array<number> = [3,1,2,3,5,4,7,9,0];
lista.sort();
show(lista);

function compare_to(a: number, b: number): number{
    if(a < b){
        return -1;
    } else if( a  > b){
        return 1;
    }else {
        return 0;
    }
}

lista.sort(compare_to)
show(lista);

lista.sort((a, b)=> a-b);
show(lista);
lista.sort((a, b)=> a-b);
show(lista);
// 4 - 7 = -3;
// 8- 4 = 4;
// 5 - 5 = 0;

let nomes: Array<string> = ["João", "Maria", "José", "Pedro","Ana"]
nomes.sort();
show(nomes);

lista.sort((a, b) => Math.abs(a) - Math.abs(b));
show(lista);

nomes.sort((a, b) => a.localeCompare(b));
show(nomes);

class Pessoa {
    constructor(public nome: string, public idade: number: number)
}