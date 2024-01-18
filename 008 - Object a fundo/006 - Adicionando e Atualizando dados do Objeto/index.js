let Tenis = {
    tamanho: 45,
    estoque: true,
}

Tenis.tamanho = 42;
Tenis.estoque = false;
//Tenis.preco = "R$ 42";
Tenis["preco"] = "R$ 42"
Tenis.cor = "Azul"
Tenis.marca = "Nike"
console.log(Tenis);
console.log(Tenis["preco"])