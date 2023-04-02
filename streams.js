// No node existem 4 tipos de stream que são:
/*
Description                 Example            Important Event          Important Function
Readable streams  ->        https requests      data                        pipe()
                            fs read streams     end                         read()
Writable streams -> 
Duplex Streams ->
Tranform Streams ->*/;

const server =require('http').createServer();
const fs = require('fs');

server.on('request', (req, res)=>{
    /*Solution 1
    fs.readFile('test-file.txt', (err, data)=>{
        if(err) console.log(err);
        res.end(data)
    })*/

    //Solution 2 : streams
    // const readable = fs.createReadStream('test-file.txt')
    // readable.on('data', chuck => {
    //     res.write(chuck)
    // })

    // readable.on('end', ()=>{
    //     res.end(' hi guys');
    // })

    // readable.on('error', err =>{
    //     console.log(err)
    //     res.statusCode=500;
    //     res.end('file not found!')
    // })

    //soluction 3 : 
})


server.listen(8080, '127.0.0.1', ()=>{
    console.log('server on')
})