const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(_dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) // quebrando em linhas
    .then(linhas => linhas.join(',')) // juntando e separando por vírgula
    .then(conteudo => `O valor final é: ${conteudo}`) // criando a frase e mostrando o valor
    .then(console.log) // exibindo no console