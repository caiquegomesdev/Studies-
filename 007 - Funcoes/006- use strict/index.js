/*
O strict mode elimina alguns erros silencioso que
passariam batido do JavaScript e os faz emitir erros.

Alem disso, essa forma corrige alguns erros que tornam o Javiscript 
dificil de ser otimizado, entao algumas vezes os codigos no modo estrito
rodam mais otimizados  e velozes do que os codigos no 'modo normal'.
*/
"use strict";
//var arguments;

(() => {
    teste = "teste";
}) ();
console.log(teste)