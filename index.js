const fs = require('fs')

// //syncronous blocking way
// const textIn =fs.readFileSync('./ola.txt', 'utf-8')
// console.log(textIn)

// const m = "Eu sei onde irei chegar vou mudar a minha vida e de todos que estao a minha volta!";
// fs.writeFileSync('./jok.txt', m)
// const h = fs.readFileSync('./jok.txt', 'utf-8');
// console.log(h)

//asycronous non-blocking way
fs.readFile('./krypthonverse.txt', 'utf-8',(error, data)=>{
    fs.readFile(`./${data}.txt`, 'utf-8',(error, data1)=>{
        console.log(data1)
        fs.readFile('./jok.txt', 'utf-8',(error, data2)=> {
            console.log(data2)
            fs.writeFile('./kry.txt', `${data1}\n${data1}`,'utf-8', err =>{
                console.log('file has been writen ...')
            })
        })
    })

})