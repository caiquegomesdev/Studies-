//function Name() {}
//console.log(new  Date());

// function Name(name, sobrenome){
//     this.name = name;

//     this.sobrenome = () => {
//         const nomeCompleto = `${this.name} ${sobrenome}`
//         return nomeCompleto;
//     }
// }
// const gomes = new Name("Caique", "Gomes");
// console.log(gomes.sobrenome())
// const maria = new Name("Maria Joaquina")
// console.log(gomes.name); 
// console.log(maria.name); 

function Calculadora(){
    this.soma = (num1, num2) => {
        return `${num1 + num2}`
    };

    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`
    }
}

const calculadora = new Calculadora();
console.log(calculadora.soma(1,2));
console.log(calculadora.subtracao(1,2));