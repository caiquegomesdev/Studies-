/*
Obejeto: Tenis (Propriedade) "cadarco", "palmilha"
Objeto: Celular (Propriedade)
Objeto: Drone (Propriedade)
*/

let Tenis ={
    tipo: "Tenis de Corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha:39,
        tenis:40,
        caixa:{
            altura: 35,
            largura: 40,
            profundidade: 10,
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "Puma"],
    marcaArrayObj: [
        {
            nome:"Nike",
        },
        {
            nome:"Adidas",
        },
        {
            nome: "Puma",
        },
    ],
    getMarcaArrayValores: function (param){
        return this.marcaArrayValores[param];
    },
    getMarcaArrayObj: function (param){
        return this.marcaArrayObj[param].nome;
    },
};

console.log(Tenis);
console.log()
console.log(Tenis.tipo);
console.log()
console.log(Tenis.tamanho);