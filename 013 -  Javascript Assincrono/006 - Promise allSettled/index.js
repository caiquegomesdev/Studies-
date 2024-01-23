/*
Promise.allSettled é um método que recebe um array de promessas e retorna uma nova promessa que é resolvida somente quando todas as promessas no array foram resolvidas ou rejeitadas. A diferença principal entre Promise.all e Promise.allSettled é que Promise.allSettled não é interrompida por uma única promessa rejeitada; em vez disso, ela aguarda que todas as promessas sejam resolvidas ou rejeitadas antes de ser resolvida.
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
        return reject('Promise 3')
    },1000)
})

Promise.allSettled([promise1, promise2, promise3]).then((resAllSettled) => {
    resAllSettled.forEach((item) => {
        if(item.status === "fulfilled"){
            console.log(item.reason);
        }else if (item.status === "rejected"){
            console.log(item.reason);
        }
    });
});
