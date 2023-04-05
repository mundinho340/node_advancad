const http = require('http')
const url = require('url')

const server = http.createServer((req, res)=>{
    const rotas= req.url;
    if(rotas == '/' || rotas =='overView'){
        res.end('hello guys this is overview')    
    }
    if(rotas== "/client"){
        res.end('Estas na pagina do cliente')
    }else if(rotas == '/server'){
        res.end('estas na pagina do servidor')
    }else{
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        
        res.end('<h1>Page Not found</h1>')
    }
})

server.listen(8080, 'localhost', ()=>{
    console.log('server running')
})


