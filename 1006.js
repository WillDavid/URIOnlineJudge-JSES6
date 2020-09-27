let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split("\n")


let a = Number(valores.shift()) * 2
let b = Number(valores.shift()) * 3
let c = Number(valores.shift()) * 5

let media = (a+b+c)/(2+3+5)

console.log(`MEDIA = ${media.toFixed(1)}`)



