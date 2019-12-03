const fs = require('fs');


console.log(('-'.repeat(20)));
console.log('Reading File 1');
fs.readFileSync('./pictures/cat1.jpg');

console.log(('-'.repeat(20)));
console.log('Reading File 2');
fs.readFileSync('./pictures/cat2.jpg');

console.log(('-'.repeat(20)));
console.log('Reading File 3');
fs.readFileSync('./pictures/cat3.jpg');
