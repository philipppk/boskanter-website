const express = require('express')
const bodyParser = require('body-parser')
const exec = require("child_process").exec;
const app = express()
const port = 3000

app.use(bodyParser.text())

app.post('/api/newsletter/subscribe', (req, res) => {
  res.end('Hello World!' + req.body)
})

app.post('/api/build', (req, res) => {
  if (req.body == "TestMausBrot") {
    exec('echo "hello world" > hello_world.txt')
    res.end('website is being rebuild')
  }
  else {
    res.end("The password was not correct")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})