const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: " Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: {a: "a e= a", b:{c:"C"}},
};

// const { tamanho, estoque, marcas = "Nao posssui Marca alguma!"} = Tenis;
// console.log(tamanho,estoque,marcas)

// const {secret: randomNumber, n: avaliacoes} = Tenis;
// //console.log(secret);
// console.log(randomNumber);
// console.log(avaliacoes);

// const {
//     link: {
//         a,
//         b:{c},
//     },
// } = Tenis;
// console.log(c)

console.log(Tenis.link.a, Tenis.link.b.c)