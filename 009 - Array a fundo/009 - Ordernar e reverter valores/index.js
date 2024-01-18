const stringArray = ["A", "C", "D", "W", "L", "B"];
console.log(stringArray.sort());
console.log(stringArray.reverse());

/*
    * sort((a, b) => a - b)
    * se retornar um valor negativo, o valor de "a" sera ordenado antes de "b".
    *se retornar 0, a ordenacao de "a" e "b" nao mudara.
    * se retornar um valor positivo, o valor de "b" sera ordenado antes de "a".
*/

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15]

console.log(numberArray.sort((a, b) => a - b))
console.log(numberArray.sort((a, b) => b - a))
console.log(numberArray.sort((a, b) => a - b).reverse());

const objArray = [
    {nome: 'João', idade: 28},
    {nome: 'Maria', idade: 36},
    {nome: 'Pedro', idade: 22},
    {nome: 'Alex', idade: 47},
    {nome: 'Caique', idade: 25},
    {nome: 'Fabricio', idade: 27},
]

console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)))