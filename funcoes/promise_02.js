// setTimeout( function() {
//     console.log('Excutando callback .')

//     setTimeout ( function() {
//         console.log('Excutando callback ..')

//         setTimeout ( function() {
//             console.log('Excutando callback ...')
//         }, 2000 )

//     }, 2000 )

// }, 2000)

// usando promise:

function esperarPor(tempo = 2000) {
    return new Promise( function( resolve ) {
        setTimeout( function() {
            console.log('Executando promise após 2000 ...')
            // resolve('Vishhhh')
            resolve()
        }, tempo )
    } )
}

// nesse exemplo vai exibir o texto 'Vishhh' após 3 segundos
// esperarPor(3000).then(texto => console.log(texto))

// abaixo vou executar o texto 'Executando promise após 2000 ..' 3 vezes
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
