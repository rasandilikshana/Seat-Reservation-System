const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/hold', (req, res) => {
    res.params('hold')
})

app.post('/book', (req, res) => {
    res.console.log('booking')
})

app.delete('/holds/:holdId', (req, res) => {
    res.console.log('delete hold id')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
