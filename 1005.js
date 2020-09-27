let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split("\n")
let a = Number(valores.shift()) * 3.5
let b = Number(valores.shift()) * 7.5
let media = (a+b)/11
console.log(`MEDIA = ${media.toFixed(5)}`)