const http= require('http');

const Eventemiter = require('events');
const myEmiter = new Eventemiter();

myEmiter.on('new sales', ()=>{
    console.log('there was new sales')
});

myEmiter.on('new sales', ()=>{
    console.log('costumer: Raimundo João Chigarisso')
});

myEmiter.on('new sales', stock =>{
    console.log(`there are now ${stock} left in stock`);
})

myEmiter.emit('new sales');
myEmiter.emit('new sales',9);

//server

const server = http.createServer();

server.on('request', (req, res)=>{
    console.log('Request received')
    console.log(req.url)
    res.end('Hello bro 👍');
});

server.on('request', (req, res)=>{
    console.log('another request');
});


server.on('close', (req, res)=>{
    console.log('Server closed');
});

server.listen(8080, '127.0.0.1',()=>{
    console.log('Wainting for request ...');
});
