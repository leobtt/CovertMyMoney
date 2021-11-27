const express = require('express')
const path = require('path')
const app = express()

const { convert , toMoney } = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

// lugar onde colocamos nossos arquivos CSS
app.use(express.static(path.join(__dirname, 'public')))

app.get('', (req,res)=> {
  res.render('home')
})

app.get('/price', (req,res) => {
  const {price, amount} = req.query
  if(price && amount){
  const converter = convert(price, amount)
  console.log(converter)
  res.render('price', { 
    error: false,
    price: toMoney(price),
    amount: toMoney(amount),
    converter: toMoney(converter)})
  } else {
    res.render('price', {
      error: 'valor inválido'
    })
  }
})

app.listen(3000, err => {
  if(err) console.log(err)
  else console.log('Working')
})