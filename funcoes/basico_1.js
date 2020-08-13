let a = 4
console.log(a)

// Function Declaration

function bomDia() {
    console.log('Bom dia')
}
bomDia()

// Function Expression

const boatarde = function () {
    console.log('Boa tarde')
}
boatarde()

let x = boatarde() // undefined

function somar(a, b) {
    return  a + b
}

const resultado = somar(3, 4)
console.log(resultado)