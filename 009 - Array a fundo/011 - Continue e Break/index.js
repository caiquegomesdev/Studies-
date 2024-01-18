const myArrayObj = [
    {
        nome: 'Cristiano',
        sobrenome:'Ronaldo',
    },
    {
        nome: 'Kendrik',
        sobrenome: 'Lamar',
    },
    {
        nome: 'Peter',
        sobrenome: 'Parker',
    },
    {
        nome: 'Bruce',
        sobrenome: 'Wayne',
    }
];

for(let item of myArrayObj) {
    if(item.nome === "Kendrik") {
        console.log("O mozao ta te esperando");
        continue;
    }

    if(item.nome === "Bruce") {
        console.log("Lembrar de enviar o sms");
        break;
    }
    console.log(item)
}