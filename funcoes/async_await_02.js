function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max] // aqui é uma desestruturação para inverter o valor das variáveis caso o min seja maior do que o max

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
           numeros.push(await gerarNumerosEntre(1, 60, numeros)) 
        }
        return numeros // o retur resolve
    } catch(e) {
        throw 'Que chato' // o catch rejeita
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)


// abaixo, o array [1, 2, 3] é o argumento passado na função, na linha 1. No if da linha 7 eu defino que os 'numerosProibidos' não podem entrar.
// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)