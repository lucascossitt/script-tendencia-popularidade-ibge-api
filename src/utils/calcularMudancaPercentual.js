module.exports = async function (dados) {
    const frequencias = dados[0].res.map(periodo => periodo.frequencia)
    const decadas = dados[0].res.map(periodo => periodo.periodo)
    const mudancas = []
    for (let i = 1; i < frequencias.length; i++) {
        const mudanca = ((frequencias[i] - frequencias[i - 1]) / frequencias[i - 1]) * 100
        mudancas.push({ decada: decadas[i], mudanca })
    }
    return mudancas
}