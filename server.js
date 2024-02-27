const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.text())

app.post('/api/newsletter/subscribe', (req, res) => {
  res.end('Hello World!' + req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})