//Funçoes em typerscript
function adicionar(a:number, b:number): number{
    return a+b;
}
console.log(adicionar(2,3));

let adicionar1 = function (a:number, b:number):number {
    return a+b;
}
console.log (adicionar1(3,4));  

//arrow function

let adicionar2= (a:number, b:number):number => {
    return a+b;
}
console.log(adicionar(4,5));