const axios = require('axios')

module.exports = async function (nome) {
    try {
        const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.error(err)
        return null
    }
}