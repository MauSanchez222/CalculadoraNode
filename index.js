'use strict';

var Calculadora = require('./app/Calculadora')

var a = 2;

var b = 4;

console.log(`suma ${a} + ${b} = ${Calculadora.suma(a,b)}`);
console.log(`resta ${a} + ${b} = ${Calculadora.resta(a,b)}`);
console.log(`multiplicar ${a} + ${b} = ${Calculadora.multiplicar(a,b)}`);
console.log(`dividir ${a} + ${b} = ${Calculadora.dividir(a,b)}`);