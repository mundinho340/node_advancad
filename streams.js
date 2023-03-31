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


server.listen(800, 'localhost', ()=>{
    console.log('server on')
})