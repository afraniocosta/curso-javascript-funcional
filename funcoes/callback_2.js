const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

// forma assíncrona. Primeiro os 2 consoles são lidos pra depois ler as funções
console.log('Início...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')

// forma síncrona. Todo o conteúdo é lido linha por linha
console.log('Início Sync...')
const conteudo = fs.readFileSync(caminho) 
console.log(conteudo.toString())
console.log('Fim Sync...')


