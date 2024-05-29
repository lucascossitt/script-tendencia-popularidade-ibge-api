const axios = require('axios')

module.exports = async function (nome) {
    return new Promise(async function (resolve, reject) {
        try {
            const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`
            axios.get(url)
                .then(response => resolve(response.data))
        } catch (err) {
            console.error(err)
            return null
        }
    })
}