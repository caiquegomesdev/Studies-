/*
var - Ele e utilizado globalmente
let - Ele é usado localmente, mas pode ser acessada fora do bloco (Ele E gerado dentro de um escopo)
const - Ele é usado para declarar uma variável que não poderá mais ter seu valor alterado ( ele e gerradp dentro de um escopo porem podemos armazenar dados apenas uma vez)
*/
console.log("-Var")
var cachorro = "Milla";
console.log(cachorro);
cachorro = "Lumma";
console.log(cachorro);

console.log("==============")

console.log("-Let")
let lanche = "Pastel de Camarao";
console.log(lanche);
lanche = "Caldo de Cana";
console.log(lanche);

console.log("==============")

console.log("-Const")
const nome = "Caique";
console.log(nome);
//nome = "Caique Gomes"
//console.log(nome)