let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split('\n');

let name = valores.shift();
let salarioFixo = Number(valores.shift());
let vendasComi = Number(valores.shift()) * 0.15;

let totalSalario = salarioFixo + vendasComi;

console.log(`TOTAL = R$ ${totalSalario.toFixed(2)}`);