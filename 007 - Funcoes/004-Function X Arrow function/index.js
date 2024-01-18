/*
1-Nome de  funcao
2-Retorno
3- nao tem Hoistng
4- Arguments
*/
function nomeFunc() {
    return "Caique Gomes"
}
console.log(nomeFunc());


const nomeFuncArrow = () => {
    return "Felipe Guimarães";
}
console.log(nomeFuncArrow())

const nomeFuncArrowReturn = () => "Gomes Caique"
console.log(nomeFuncArrowReturn())

const nomeFuncArrowHoisting = () => {
    return "KaiqueGomes"
}
console.log(nomeFuncArrowHoisting()); 

//Nao funciona o arguments
// const nomeFuncArrowArguments = () => {
//     return arguments;
// }
// console.log(nomeFuncArrowArguments())

function nomeFuncArguments (){
    return arguments;
}
console.log(nomeFuncArguments("Caique GOmesss"));

const nomeFuncArrowParams = (param) => param;

/*
5- Nao pode ser invocada com New
*/
/*
Contexto

Arrow functions possume this lexico enquanto o modelo normal possui this dinamico

Isso  significa que arrow functions herdam o contexto local de onde foi declarado, enquanto o modelo normal possui o contexto associado ao objeto que ele esta vinculado no momento da chamada

se ele nao estiver associado a niguem na chamada ele assumira this automaticamente como o contexto global, que no caso dos navegadores e window
*/
const lanches ={
    cardapio: [
        {nome:"X-Burger", preco:10},
        {nome:"Refrigerante",preco:3},
        {nome:"Suco de Laranja",preco:4},
        //Adicionar um novo item no cardapio
    ],
    
    meuPedidoFunc: function(select){
       return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function () {
        setTimeout(function (){
            console.log(this.cardapio);
            console.log(this)
        }.bind(this), 1000);
    },

    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
            {nome:"X-Burger", preco:10},
            {nome:"Refrigerante",preco:3},
            {nome:"Suco de Laranja",preco:4},
            
        ];

        return console.log(this.cardapio[select])
    },
}
lanches.meuPedidoFunc(2);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

/*
7- Construtor
Arrow functions nao podem ser constructors, entao nao e possive usar o operador new com a mesma
*/

class newFunc {
    constructor(nome) {
        this.nome = nome;
    }
}

const a= new newFunc("GOMES")
console.log(a.nome)
