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
 * O Some pergunta se apenas 1 dos valores da Array equivale a sua condicao
 */

const existeAlimento = pedidos.some((element, index) => {
    return element.alimento === "Pastel de Camarao Monstro"
})
const existeAlimento2 = pedidos.some((element, index) => {
    return element.alimento === "Bolo de Chocolate"
})
console.log(existeAlimento);
console.log(existeAlimento2);