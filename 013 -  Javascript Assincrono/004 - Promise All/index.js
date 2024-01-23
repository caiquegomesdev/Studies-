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
        },2000)
    });
};

Promise.all([pedido("Arroz"), pedido("Pizza")]).then((resPedidos) => {
    console.log(resPedidos[0]);
    console.log(resPedidos[1]);
}).catch((error)=> {
    console.log(error)
})