const axios = require('axios')

const getUrl = data => `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

const getPriceAPI = data => axios.get(getUrl(data))
const extractPrice = res=> res.data.value[0].cotacaoVenda

const getToday = () => {
  const today = new Date()
  return `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`
}

const getPrice = async() => {
  try{
    const today = getToday()
    const res = await getPriceAPI(today)
    const price = extractPrice(res)
    console.log(price)
    return price
  }catch(err){
    return ''
  }
}

module.exports = {getPriceAPI, extractPrice, getPrice}

