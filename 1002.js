let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split("\n")

let n = 3.14159
let raio = Number(valores.shift())

let areaCirculo = n*(raio**2)

console.log(`A=${areaCirculo.toFixed(4)}`)