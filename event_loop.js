const fs = require('fs')

setTimeout(()=> console.log('timed 1 fineshed'), 0)
setImmediate(()=> console.log('immediate 1 finished'),0)

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished')
})

console.log('hello from top level code')