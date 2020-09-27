let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split("\n")
let A = Number(valores.shift())
let B = Number(valores.shift())
let soma = A + B
console.log(`SOMA = ${soma}`)