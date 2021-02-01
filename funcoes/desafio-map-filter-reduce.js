const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Teroura', qtde: 1, preco: 19.20, fragil: true },
]
// 1 - fragil = true (usando filter)
// 2 - qtde * preco -> total (usando map)
// 3 - média do total de todos elementos, dentro desse processamento (usando recuce)

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce(() => {
        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal /novaQtde 
        }
    }, { qtde: 0, total: 0, media: 0 })

    const mediaInicial = { qtde: 0, total: 0, media: 0 }

    const media = carrinho
        .filter(fragil)
        .map(getTotal)
        .reduce(getMedia, mediaInicial)
        .media

    console.log(`A média é ${media}!`)