/*
Escopo:
Determina quais
sao os  dados que podem
ser acessados em uma determinada
 parte do codigo.
*/

{
    var meio = "Santos"
    let nome = "Gomes"
    const sobrenome= "Caique"
}
console.log(meio) //Var e possivel ser lido fora do escopo por ser global por isso e contraindicado

// tanto let quanto const nao sao possiveis ser lidos fora do escopo 
console.log(nome)
console.log(sobrenome)
//Erro! 'nome' nao esta definido no escopo atual</s>