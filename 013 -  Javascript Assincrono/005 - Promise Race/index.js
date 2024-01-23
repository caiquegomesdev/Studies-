/*
Promise.race é um método que recebe um array de promessas e retorna uma nova promessa que é resolvida assim que qualquer uma das promessas de entrada for resolvida (seja por resolução ou rejeição). O valor resolvido (ou motivo de rejeição) da primeira promessa a ser resolvida é utilizado como o valor resolvido da promessa retornada.
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        return resolve('Promise 1')
    },3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        return resolve('Promise 2')
    },4000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        return resolve('Promise 3')
    },1000)
})

Promise.race([promise1, promise2, promise3]).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})

// promise1.then((res) =>{
//     console.log(res); // Aqui vai aparecer a mensagem "Promise
// })

// promise2.then((res) =>{
//     console.log(res); // Aqui vai aparecer a mensagem "Promise
// })

// promise3.then((res) =>{
//     console.log(res); // Aqui vai aparecer a mensagem "Promise
// })