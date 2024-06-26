const express = require('express')
const bodyParser = require('body-parser')
const exec = require("child_process").exec
const fs = require("fs/promises")
const crypto = require("crypto")
const blogsearch = require("./blogsearch.js")

const app = express()
const port = 3000

app.use(bodyParser.text())

async function scanCSV(filename, rowProcessor) {
  let file = await fs.open(filename, "r")
  let output = {text: "", info: null}
  let head = true
  for await (line of file.readLines()) {
    if (head) {
      output.text += line
      head = false
      continue
    }
    row = line.split(",")
    rowProcessor(output, row)
  }
  return output
}


// Jemand gibt auf der Website seine Email Adresse an

async function addToABTS(email) {
  abts = await scanCSV("about_to_subscribe.csv", (output, row) => {
    if (Date.now()-parseInt(row[2]) <= 1800000) {  
      output.text += "\n" + row.join(",")
    }
  })
  abts.text += `\n${email},${crypto.randomBytes(20).toString("hex")},${Date.now()}`
  await fs.writeFile("about_to_subscribe.csv", abts.text)
}

app.post('/api/newsletter/subscribe', (req, res) => {
  if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body)) {
    res.end(`${req.body} is not a valid email adress.`)
    return
  }
  addToABTS(req.body)
  res.end(`An email has been sent to ${req.body}. Click onfirm email to finalize your subscription.`)
})


// Jemand folgt dem Link der ihm per Mail geschickt wurde um seine Email Adresse zu bestätigen

async function getEmailFromABTS(url) {
  abts = await scanCSV("about_to_subscribe.csv", (output, row) => {
    if (Date.now()-parseInt(row[2]) <= 1800000) {  
      output.text += "\n" + row.join(",")
    }
    if (row[1] == url) {
      console.log("url wurde gefunden")
      output.info = row[0]
    }
  })
  fs.writeFile("about_to_subscribe.csv", abts.text)
  return abts.info
}

async function addToML(email) {
  ml = await scanCSV("mailinglist.csv", (output, row) => {
    if (row[1] == email) {
      output.info = "email already in newsletter"
    }
  })
  if (ml.info === null) {
    await fs.appendFile("mailinglist.csv", `\n${email},${crypto.randomBytes(20).toString("hex")}`)
  } 
}

app.post('/api/newsletter/confirm', async (req, res) => {
  let email = await getEmailFromABTS(req.body)
  if (email === null) {
    res.end("You confirmation URL has expired, subscribe again to get a new confirmation URL")
  }
  else {
    await addToML(email)
    res.end("You are now subscribed to the newsletter")
  }
})


// unsubscribe

async function removeURLFromML(url) {
  ml = await scanCSV("mailinglist.csv", (output, row) => {
    console.log("test")
    if (row[1] == url) {
      output.info = "URL gefunden"
    } 
    else {
      output.text += `\n${row.join(",")}`
    }
  })
  if (ml.info == "URL gefunden") {
    fs.writeFile("mailinglist.csv", ml.text)
  }
}

app.post('/api/newsletter/unsubscribe', (req, res) => {
  removeURLFromML(req.body)
  res.end("")
})


// build

app.post('/api/build', (req, res) => {
  if (req.body == "TestMausBrot") {
    exec('git pull && eleventy');
    res.end('website is being rebuild');
  }
  else {
    res.end("The password was not correct");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// Blogposts nach Kategorie

app.post('/api/blog/postsbycategory', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(blogsearch.posts[req.body]))
})

app.post('/api/blog/search', (req, res) => {
  let r = JSON.parse(req.body)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(blogsearch.category[r.category].search(r.query, {
    boost: {title: 2, tags: 2},
    prefix: true,
    fuzzy: 0.2
  })))
  //res.end(JSON.stringify(blogsearch.category[req.category].search(req.query)))
})