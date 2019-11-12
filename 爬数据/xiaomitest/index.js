var superagent = require('superagent')
var charset = require('superagent-charset')
charset(superagent)
const cheerio = require('cheerio')
const express = require('express')
const app = express()
var baseUrl = 'https://www.mi.com'
app.get('/index', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  superagent.get(baseUrl).charset('utf-8').end((err, sres) => {
    var items = []
    if (err) {
      console.log('ERR: ' + err)
      return res.json({ code: 400, msg: err, sets: items })
    } 
    var $ = cheerio.load(sres.text)
    $('ul.brick-list li.brick-item a').each((idx, element) => {
      items.push({
        href: $(element).attr('href')
      })
    })
    res.json({ code: 200, msg: '', data: items })
    res.json({data: sres})
    // res.send(sres.text)
  })
})
var server = app.listen(3000, () => {
  console.log('Server is running http://localhost:3000')
})
