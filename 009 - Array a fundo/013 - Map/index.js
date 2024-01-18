const pedidos = [
    {
        id:420,
        nome: "Cristiano",
        alimento: "Sandubao de Bacon",
        bebida: "Suco de Limao"
    },
    {
        id:152,
        nome: "Kendrick Lamar",
        alimento: "Sandubao de Vegano",
        bebida: "Suco de Laranja"
    },
    {
        id:33,
        nome: "Miles Morales",
        alimento: "Pastel de Camarao Monstro",
        bebida: "Caldo de Cana"
    },
    {
        id:33,
        nome: "Peter Parker",
        alimento: "Sandubao de Carne da MaryJane",
        bebida: "Suco de Maracuja"
    },
    {
        id:55,
        nome: "Gomes",
        alimento: "Pastel de Camarao Monstro",
        bebida: "Caldo de Cana"
    }
];

/*
* O metodo Map alem de  iterar todo o Array ele e muito bom para editar  o iterado
*/
pedidos.map((element, index) => {
    if(element.id === 420 && element.alimento === "Sandubao de Bacon"){
        return (element.alimento = "Salada")
    }
});
console.log(pedidos);