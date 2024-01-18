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

myArrayObj.forEach((item, index) => {
    if(item.nome === "Cristiano") {
       return console.log("E o Robozinho Robozao");
    }
    console.log(index, item.nome);
});