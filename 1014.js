let input = require('fs').readFileSync('stdin', 'utf8');

let valores = input.split("\n");

let distancia = valores.shift();
let combustivelGasto = valores.shift();

let consumoMedio = distancia/combustivelGasto;
console.log(`${consumoMedio.toFixed(3)} km/l`);



