/*
    slice =  pega os dados dentro de um range sem quebrar o Array
    splice = remove os dados do Array dentro de um range
*/

let arr = [
    {nome: "Gomes", tel: "(99) 99999-9999"},
    {nome: "Mozao", tel: "(99) 99999-9999"},
    {nome: "Amigo 1", tel: "(99) 99999-9999"},
    {nome: "Amigo 2", tel: "(99) 99999-9999"},
    {nome: "Amigo 3", tel: "(99) 99999-9999"},
];
console.table(arr);

const newArray = arr.slice(2, 4);
console.table(newArray);

arr.splice(0,3);
console.table(arr)