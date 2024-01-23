/*
Async/Await: e uma forma mais recente e mais legivel de lidar com tarefas assincronas em Javascript.

Essa abordagem utliliza as palavras-chave async e await para indicar funcoes assincronas e pausar a execucao ate que uma Promise seja resolvida.
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

const reservarPedido = async () => {
    try{
        console.log(await pedido("Arroz"))
        console.log(await pedido("Carne"))
        console.log(await pedido("Pizza"))
        
    } catch (error){
        console.log(error)
    }
}
reservarPedido();