'use strict';

function su(a,b) {
    return a+b;
}

function resta(a,b) {
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){

if (b === 0) {
    return new Error("No se puede dividir por 0");
}  else {
    return a/b;
}
}

module.exports = {
    suma,
    resta,
    multiplicar,
    dividir,
}