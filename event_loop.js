const fs = require('fs')
const crypto = require('crypto')
const start = Date.now()
process.env.UV_THREADPOOL_SIZE=4;
setTimeout(()=> console.log('timed 1 fineshed'), 0)
setImmediate(()=> console.log('immediate 1 finished'),0)

fs.readFile('test-file.txt',()=>{
    console.log('I/O finished')
    console.log('---------------------------------')
    setTimeout(() => console.log('timed 2 finished'), 0);
    setTimeout(() => console.log('timed 3 finished'), 3000);
    setImmediate(() => console.log('immediate 2 finished'));
    process.nextTick(() => console.log('process.Next tick'));
    crypto.pbkdf2Sync('password', 'salt', 100000,1024,'sha512');
    console.log(Date.now() - start,'password encrypted');

     crypto.pbkdf2Sync('password', 'salt', 100000,1024,'sha512');
    console.log(Date.now() - start,'password encrypted');

     crypto.pbkdf2Sync('password', 'salt', 100000,1024,'sha512');
    console.log(Date.now() - start,'password encrypted');

     crypto.pbkdf2Sync('password', 'salt', 100000,1024,'sha512');
    console.log(Date.now() - start,'password encrypted');
    
})

console.log('hello from top level code')