const fs = require('fs')
const crypto = require('crypto')

setTimeout(()=> console.log('timed 1 fineshed'), 0)
setImmediate(()=> console.log('immediate 1 finished'),0)

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished')
    console.log('---------------------------------')
    setTimeout(() => console.log('timed 2 finished'), 0)
    setTimeout(() => console.log('timed 3 finished'), 3000)
    setImmediate(() => console.log('immediate 2 finished'))
    process.nextTick(() => console.log('process.Next tick'))
    crypto.pbkdf2()
})

console.log('hello from top level code')