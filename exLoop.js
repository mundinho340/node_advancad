var client='oi';
setTimeout(()=> {
    if(client =='oi'){
        console.log('oi o que desejas!')
    } else if(client =='pedido'){
        setTimeout(()=> {
            console.log('o que desejas')
        }, 3000)
    }else{
        console.log('Tens algum pedido? ')
        if(client == 'sim'){
             setTimeout(()=> {
            console.log('o que desejas')
        }, 3000)
        }else{
            console.log('continuaçao de uma optima noite')
        }
    }
})