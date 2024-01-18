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
*Esse metodo e ultilizado quando temos nessecidade de filtrar algo em nossa lista
*/
const filterCaldoDeCana = pedidos.filter((element, index) => {
    return element.bebida === "Caldo de Cana"
});
console.log(filterCaldoDeCana);