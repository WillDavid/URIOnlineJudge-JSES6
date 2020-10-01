let r = require('fs').readFileSync('stdin', 'utf8');

let volume = (4/3) * 3.14159 * (r**3)

console.log(`VOLUME = ${volume.toFixed(3)}`)