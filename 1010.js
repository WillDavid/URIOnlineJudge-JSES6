let input = require('fs').readFileSync('stdin', 'utf8');

let linhas = input.split("\n");

let linha1 = linhas.shift().split(" ");
let linha2 = linhas.shift().split(" ");


let idItem = Number(linha1.shift())
let quantItem = Number(linha1.shift())
let valorItem = Number(linha1.shift())

let valorTotal = quantItem * valorItem

let idItem2 = Number(linha2.shift())
let quantItem2 = Number(linha2.shift())
let valorItem2 = Number(linha2.shift())

let valorTotal2 = quantItem2 * valorItem2

valorTotal = valorTotal + valorTotal2

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)







