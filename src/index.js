const readline = require('readline')
const getDadosIBGE = require('./services/IBGE/obterDados')
const calcularMudancaPercentual = require('./utils/calcularMudancaPercentual')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Insira 2 ou mais nomes separados por virgula: ', async input => {
    const nomes = input.split(',').map(nome => nome.trim())

    for await (let nome of nomes) {
        const dados = await getDadosIBGE(nome)
        
        if (dados) {
            const mudancas = await calcularMudancaPercentual(dados)
            console.log(`Nome: ${nome}`);
            mudancas.forEach(({decada, mudanca}) => {
                console.log(`Década: ${decada.replaceAll("[", "").replaceAll("]", "")} -> Mudança percentual: ${mudanca.toFixed(2)}%`)
            })
        } else {
            console.log(`Nenhum dado encontrado para o nome: ${nome}`)
        }
    }
    await rl.close()
})