const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
    {
        nome: 'Cristiano',
        sobrenome:'Ronaldo',
    },
    {
        nome: 'Kendrik',
        sobrenome: 'Lamar',
    },
    {
        nome: 'Peter',
        sobrenome: 'Parker',
    },
    {
        nome: 'Bruce',
        sobrenome: 'Wayne',
    }
]

// **for ([inicializacao]; [condicao]; [expressao final]);**
// for(let i = 1; i < myArrayObj.length; i++) {
//     console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome)
// }

//**for Of**
// for(let item of myArrayObj){
//     console.log(item.nome, item.sobrenome);
// }

//**for in** funciona melhort com objetos do que Arrays
   
const obj = {nome: " Caique ", sobrenome: "Gomes"}
for(let item in obj){
    console.log(`${item}: ${obj[item]}`)
}
