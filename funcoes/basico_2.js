function bomDia() {
    console.log('Bom dia')
}

const boaTarde = function () {
    console.log('Bom tarde')
}

// passar uma função como parâmetro
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

// retornar uma função a partir de outra função - EX: 1
function potencia(base, exp) {
    return Math.pow(base, exp)
}

// ex 1
const bits8 = potencia(2, 8)
console.log(bits8)

// retornar uma função a partir de outra função - EX: 2
function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
     }
}

// ex 2
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
