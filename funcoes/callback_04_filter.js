const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Teroura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome // função que mapeia os nomes
const qdteMaiorQueZero = item => item.qtde > 0 // função que filtra os items com qtde > 0

const nomeItemsValidos = carrinho
.filter(qdteMaiorQueZero)
.map(getNome)
console.log(nomeItemsValidos)

// no fim, após filtrar os items com qtde maior que 0, o map exibe os nomes desses items.
