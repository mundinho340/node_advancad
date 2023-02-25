const fs = require('fs')
const textIn =fs.readFileSync('./ola.txt', 'utf-8')
console.log(textIn)

const textOut =`this is what we know about the avocado: ${textIn}.\nCreated n ${Date.now()}`
fs.writeFileSync('./output.txt', textOut);
console.log('File written!')