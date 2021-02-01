let a = 1;
console.log(a)

let p = new Promise( function(resolve){
    resolve(['João', 'Pedro'])
    // uma promise gera apenas um valor, se passar por exemplo resolve(3, 4), ela ignora o 4.
    // mas posso passar um objeto desta forma:
    // resolve({ x: 3, y: 4 }), ou um array: resolve(['joão', 'pedro'])
    // console.log(valor.x)

})

// toda Promise tem um dado que será gerado e devolvido no futuro, por isso precisa ter uma função como parâmetro pra gerar esse dado

// promise é uma função, mas ao ser usado 'new' ele passa a ser um objeto


// a funcção abaixo só será chamada qdo a de cima for cumprida passando o valor do parâmetro

// abaixo sem arow function:
// p.then( function(valor){
//     console.log(valor)
// } )

// agora com arow function:
// p.then(valor => console.log(valor))


// A cada then a informação é passada e fica disponível pro próximo then
.then(valor => valor[0]) // Aqui trouxe apenas o primeiro nome do array
.then(primeiro => primeiro[0]) // Aqui como tenho o primeiro nome, pego a primeira letra dele
.then(letra => letra.toLowerCase()) // Aqui transformo essa primeira letra em minúscula
.then(letraMinuscula => console.log(letraMinuscula))


// Dentro do then, onde tenho a arow function, eu tmb poderia chamar um função criada antes, como abaixo:

// function primeiroElemento(array) {
//     return array[0]
// }

// ou com arrow function:
// const primeiroElemento = array => array[0]

// E chamar ela assim. È a mesma coisa.
// .then(primeiroElemento)

