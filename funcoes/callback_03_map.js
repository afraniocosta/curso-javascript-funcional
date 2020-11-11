const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2
console.log(nums.map(dobro))
// O primeiro parãmetro é o valor de cada item do array

const nums2 = [1, 2, 3, 4, 5]
const dobro2 = (n, i) => n * 2 + i
console.log(nums2.map(dobro2))
// Aqui foi acrescentado o segundo parâmetro 'i' que é o índice

const nums3 = [1, 2, 3, 4, 5]
const dobro3 = (n, i, a) => n * 2 + i + a.length
console.log(nums3.map(dobro3))
// Aqui foi adicionado o terceiro parãmetro 'a', que é o próprio array. Como ele tem 5 elementos, assim foi somado 5 

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Teroura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.MeuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i ++) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuApp(getTotal)
console.log(totais)
