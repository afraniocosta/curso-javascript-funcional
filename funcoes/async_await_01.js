function esperarPor(tempo = 2000) {
    return new Promise( function( resolve ) {
        setTimeout( () => resolve(), tempo )
    } )
}


// abaixo temps um código síncrono, pois cada then só é executado após a execução do then anterior
// esperarPor(2000)
//     .then(() => console.log('Executando promise 1 ...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2 ...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3 ...'))

// da forma como está abaixo o código é executado de forma assíncrona, todos os consoles serão exibidos de uma vez.
// mas se eu colocar 'await' na frente de cada chamada de 'esperarPor()' como o comentário na primeira chamada, ele será executado de forma síncrona.
async function executar() {
    // await esperarPor(1500)
    // console.log('Async/Await 1...')

    esperarPor(1500)
    console.log('Async/Await 1...')
  
    esperarPor(1500)
    console.log('Async/Await 2...')

    esperarPor(1500)
    console.log('Async/Await 3...')
}   

executar()