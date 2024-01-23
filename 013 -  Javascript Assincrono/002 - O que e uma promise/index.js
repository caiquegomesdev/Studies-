/*
Promises: As promises sao objetos que representam a conclusao (ou falha) de uma tarefa assicrona. Elas fornecem uma sintaxe mais limpa e estruturada para lidar com o codigo assicrono, permitindo encadear chamadas e tratar de erros de forma mais eficiente
*/

const pedido = (pedido) =>{
    return new Promise((resolve, reject)=>{
        if(pedido === "Pizza"){
           return reject(`Nao temos o seu pedido [${pedido}]`)
        }
        setTimeout(() => {
            resolve(`Chegou o seu pedido [${pedido}]`);
        },5000)
    });
};

pedido("Pizza").then((resPedido) => {
    console.log(resPedido);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('Deu bom todo o processo do pedido! Finalizando...');
})


// pedido("arroz").then((resPedido) => {
//     return `${resPedido} da mesa 1`
// }).then((mesa) => {
//     console.log(mesa); 
// })