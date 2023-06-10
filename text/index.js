const fs = require('fs')
const http = require('http')
const url = require('url')

// //syncronous blocking way
// const textIn =fs.readFileSync('./ola.txt', 'utf-8')
// console.log(textIn)

// const m = "Eu sei onde irei chegar vou mudar a minha vida e de todos que estao a minha volta!";
// fs.writeFileSync('./jok.txt', m)
// const h = fs.readFileSync('./jok.txt', 'utf-8');
// console.log(h)

// asycronous non-blocking way
// fs.readFile('./krypthonverse.txt', 'utf-8',(error, data)=>{
//     fs.readFile(`./${data}.txt`, 'utf-8',(error, data1)=>{
//         console.log(data1)
//         fs.readFile('./jok.txt', 'utf-8',(error, data2)=> {
//             console.log(data2)
//             fs.writeFile('./kry.txt', `${data1}\n${data1}`,'utf-8', err =>{
//                 console.log('file has been writen ...')
//             })
//         })
//     })

// })

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server= http.createServer((req, res)=>{
    //res.end('Hellow world Raimundo')
    console.log(req.url)
    const pathName= req.url
    if(pathName == "/product"){
        res.end("Produtos")
    }else if(pathName == "/client"){
        res.end("Clientes")
    }else if(pathName== '/api'){
        fs.readFile(`${__dirname}/data.json`,'utf-8',  (error, data)=>{
            res.writeHead(200, {'content-type':'json application'})
            // const js= JSON.parse(data)
            res.end(data)
        })
    }
    else{
        res.writeHead(404 )
        res.end('<h1>Error Page not found</h1>')
    }
    
})

server.listen(8080, 'localhost',(req, res)=>{
    console.log("server running ")
})