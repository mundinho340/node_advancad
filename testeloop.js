const Eventemiter = require('events');
const http = require('http')

class Sales extends Eventemiter{
    constructor(){
        super();
    }
}

const myEmiter = new Sales;

//on emiter
myEmiter.on('ligar', ()=>{
    console.log('ligado broh ...')
})


myEmiter.on('cancelar', ()=>{
    console.log('Cancelado ...')
})

myEmiter.on('comprar', items=>{
    console.log( `usuario : Raimundo comprou ${items} items`)
})


//emiter
myEmiter.emit('cancelar');
myEmiter.emit('comprar', 10);
myEmiter.emit('ligar')


//create server
const server= http.createServer();