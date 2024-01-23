"use strict"

const bugNum = () => {
    try{
        const number = "123";
        
        console.log(number === 123);
        if (number === 123){
            return "Seu numero e 123 - type Number";
        }
        console.log(number);
        
        throw new Error("Deu Ruim");

    } catch (error){
        //return `Erro: ${error}`;   //---- Se quiser continuar execuacao
        //throw new Error();  //----Se quiser travar a execucao
    }
    
}

console.log(bugNum())
console.log(" Continua Executando");