const pedidos = [
    {
        id:420,
        nome: "Cristiano",
        alimento: "Sandubao de Bacon",
        bebida: "Suco de Limao",
        preco:88,
    },
    {
        id:152,
        nome: "Kendrick Lamar",
        alimento: "Sandubao de Vegano",
        bebida: "Suco de Laranja",
        preco:66,
    },
    {
        id:33,
        nome: "Miles Morales",
        alimento: "Pastel de Camarao Monstro",
        bebida: "Caldo de Cana",
        preco:79,
    },
    {
        id:33,
        nome: "Peter Parker",
        alimento: "Sandubao de Carne da MaryJane",
        bebida: "Suco de Maracuja",
        preco:40,
    },
    {
        id:55,
        nome: "Gomes",
        alimento: "Pastel de Camarao Monstro",
        bebida: "Caldo de Cana",
        preco:40,
    }
];
/*
* A ideia dele e pegar todos os valores de um Array e condensa-los em um so 
*/

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco
}, 0);
console.log(balancete);
