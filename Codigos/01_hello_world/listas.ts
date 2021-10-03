//javascript
let l =[1,2,3];
console.log(l);

//typescript
let l1:number[] = [2,3,4];
console.log(l1);

let l2:string[] = ["Jorge","Maria","Luis"];
console.log(l2);

//iteração

for(let i=0; i<l1.length; i++){
    console.log(l1[i])
}

//for in
for(let i in l1){
    console.log(i, l1[i]);
}

// for of
for(let elemento of l1){
    console.log(elemento);    
}

//operaçoes sobre list
let lista:number[] = [10,20,30,40];

//inserir elementos
lista.push(50);
console.log(lista);

//remover elementos
lista.splice( 2, 1);
console.log(lista);