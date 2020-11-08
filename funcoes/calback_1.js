// A função fn é passada como parâmetro.
// Callback está associado à idéia de que aconteceu algum evento, e quando ele acontecer a função é chamada de volta.
// Pode ser uma requisição no servidor.

function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w + z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)
const r = exec(subtrair, 50, 25)
console.log(r)


// Aqui estou passando abaixo uma função como primeiro parâmetro e um *setInterval como segundo. 
// * quantidade de milisegundos que vaificar executando essa função 

const cb = () => console.log('Exec ...')
setInterval(cb, 1000)



