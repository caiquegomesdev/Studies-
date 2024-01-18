/*
Precisamos mostrar a tabuada no console de 0 ate 10 neste seguinte formato:
multiplicador X numero = Resultado
multiplicador X 0 = Resultado
multiplicador X 1 = Resultado
multiplicador X 2 = Resultado
multiplicador X 3 = Resultado
...
multiplicador X 10 = Resultado

Obs.: nao podemos criar varios consoles.log(multiplicador x 3 = resultado)
*/

const multiplicador = 2;

/*
 let i = 0 (valor da variavel)
 i <= 10 (chegara ate o valor desejado = 10)
 i++ (ele adiciona + 1 sobre o valor entao sempre que acabar 
    o codigo ele add + 1 = 1 + 1 = 2,
     2 + 1 = 3, 
     3 + 1 = 4, ...)
*/

for(let i = 0; i <= 10; i++ ){
    const calc = multiplicador * i;
    console.log(`${multiplicador} x ${i} = ${calc}`)
}