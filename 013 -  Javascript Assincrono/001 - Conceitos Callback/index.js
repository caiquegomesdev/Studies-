/**
* O conceito de  calbacks esta relacionado a programacao assincrona,
 onde certas operacoes podem levar tempo para serem concluidas,
 como chamdas de API, manipulacao de arquivos ou cioonsultas a bancos de dados.

 Em vem de espera que assas operacoes sejam  concluidas asntes de continuar a execucao do codigo, os callbacks permitem que o codigo continue a ser executado, e quando a operacao assicrona e finalizada, o callback e chamado para lidar com o resultado.

*/

// setInterval(() => {
//     returnConsole();
// }, 1000);
// const returnConsole = () =>{
//     return console.log(" MEU CONSOLE FUNCIONOUU!");
// };

const meuCallback = (func) => {
    console.log(func());
}

meuCallback(() => {
    return 1 + 1;
})