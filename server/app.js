const express = require('express')
const bodyParser = require('body-parser')
const groceryService  = require('./services/groceryService')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/addGrocery', function (req, res) {
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.addGrocery()
})

app.post('/api/getGrocery', function (req, res) {
  let groceryServiceObj = new groceryService(req, res)
  groceryServiceObj.getGrocery()
})

app.listen(3000, function () {
  console.log('Grocery Web app service listening on port 3000!')
})