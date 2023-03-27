const fs = require('fs')

setTimeout(()=> console.log('timed 1 fineshed'), 0)
setImmediate(()=> console.log('immediate 1 finished'),0)

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished')
})
setTimeout(() => console.log('timed 2 finished'), 0)
setTimeout(() => console.log('timed 3 finished'), 3000)
setImmediate(() => console.log('immediate 2 finished'))

console.log('hello from top level code')