'use strict';

var expect = require("chai").expect;
var Calculadora = require("../app/Calculadora.js");

describe("Test-Calculadora", function(){
    describe("Testeando operaciones", function(){
        it("Testeando suma", function(){
            expect(Calculadora.suma(1,1)).to.equal(1+1);
        });
        it("Testeando resta", function(){
            expect(Calculadora.resta(1,1)).to.equal(1-1);
        });
        it("Testeando multiplicación", function(){
            expect(Calculadora.multiplicar(1,1)).to.equal(1*1);
        });
        it("Testeando división", function(){
            expect(Calculadora.dividir(1,1)).to.equal(1/1);
        });
        it("Testeando división por 0", function(){
            const expectedError = new Error("No se puede dividir por 0");
            expect(Calculadora.dividir(1,0).message).to.equal(expectedError.message);
        });
    });
})