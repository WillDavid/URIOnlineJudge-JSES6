let input = require('fs').readFileSync('stdin', 'utf8');
let valores = input.split('\n');


let numberFuncio = Number(valores.shift());
let horasTrabalhadas = Number(valores.shift());
let quantoGanha = Number(valores.shift());

console.log(`NUMBER = ${numberFuncio}`)

let salario = horasTrabalhadas*quantoGanha
console.log(`SALARY = U$ ${salario.toFixed(2)}`)