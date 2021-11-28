const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getPriceAPI = axios.get(getUrl('11-26-2021'))
const extractPrice = getPriceAPI

const getPrice = async() => {
  const res = await getPriceAPI
  const price = res.data.value[0].cotacaoVenda
  console.log(price)
  return price
}

module.exports = {getPriceAPI, extractPrice, getPrice}

