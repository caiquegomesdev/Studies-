const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: " Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: {a: "a e= a", b:{c:"C"}},
};

//HasOwnProperty | propertyName in Tenis

// if(Tenis.hasOwnProperty("tamanho")) {
//     console.log(`A propriedade 'tamanho' existe em Tenis.`);
// } else {
//     console.log(`A propriedade 'tamanho' não existe em Tenis.`)
// }

console.log(Tenis.hasOwnProperty("tamanho"));
console.log("teste" in Tenis)