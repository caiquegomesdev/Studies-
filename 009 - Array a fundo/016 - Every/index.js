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
* Se voce tem uma condicao , ela vai tratar toda sua Array, assim pdemos verificar se eles estao ok.
 */

const temCaldo = pedidos.every((element) => {
    return element.bebida === "Caldo de Cana"
})

console.log(temCaldo); // essa lista tem mais bebidas alem de Caldo de cana por isso da falso