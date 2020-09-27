let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split("\n")


//DIFERENCA = (A * B - C * D)

let a = Number(valores.shift())
let b = Number(valores.shift())
let c = Number(valores.shift())
let d = Number(valores.shift())

let diferenca = ((a*b)-(c*d))

console.log(`DIFERENCA = ${diferenca}`)