/*
O que e uma funcao?
E um conjunto de instrucoes que executa uma tarefa ou calcula um valor.
*/

//1- Funcoes declaration
function isValid(){
    const soma = 1 + 2;
    if (soma ===3){
        return true;
    }
    return false ;
}
console.log(isValid())

//2- Funcoes expression
const isValidExpression = function (){
    return false;
}

console.log(isValidExpression())

//3- Arrow Functions

const isValidArrow = () => {
    const multipicacao = 2 * 2;
    return multipicacao;
};

console.log(isValidArrow())
