const input = require('fs').readFileSync('stdin', 'utf8');

const valores = input.split(" ");

const a = Number(valores.shift())
const b = Number(valores.shift())
const c = Number(valores.shift())


const maior = (a+b + Math.abs(a-b))/2

if(maior>c){
    console.log(`${maior} eh o maior`)
}else{
    console.log(`${c} eh o maior`)
}

