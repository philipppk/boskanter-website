const express = require('express');
const bodyParser = require('body-parser');
const exec = require("child_process").exec;
const fs = require("fs");
const csvParser = require("csv-parser");
const crypto = require("crypto");

const app = express();
const port = 3000

app.use(bodyParser.text());


// Jemand gibt auf der Website seine Email Adresse an

app.post('/api/newsletter/subscribe', (req, res) => {
  if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body)) {
    res.end(`${req.body} is not a valid email adress.`);
    return;
  }
  fs.appendFile("about_to_subscribe.csv", `${req.body}, ${crypto.randomBytes(20).toString("hex")}\n`, (err) => {
    if (err) throw err;
  });
  res.end(`An email has been sent to ${req.body}. Click onfirm email to finalize your subscription.`);
});


// Jemand folgt dem Link der ihm per Mail geschickt wurde um seine Email Adresse zu bestätigen

app.post('/api/newsletter/confirm', (req, res) => {
  
  console.log(req.body);

  let newdata = "";
  let email;
  let requests = csvParser(fs.readFileSync('about_to_subscribe.csv'));
  .slice(0,-1).split('\n').map((s) => s.split(', '));
    console.log(lines);
    for (l of lines) {
      if (l[1] == req.body) {
        fs.appendFile("mailinglist.csv", `${l[0]}, ${crypto.randomBytes(20).toString("hex")}\n`, (err) => {
          if (err) throw err;
        });
      }
      else {
        newdata += `${l[0]}, ${l[1]}\n`;
      }
    }
    fs.writeFile('about_to_subscribe.csv', newdata, (err) => {});
  });
  res.end("test");
});

// Funktion die eine Email Adresse zur Mailinglist hinzufügt wenn sie nicht schon drin ist

function addToMailingList(email) {
  console.log(email);
  let alreadyThere;
  fs.readFile("mailinglist.csv", 'utf8', function(err, data) {
    if (err) {console.log(err);}
    alreadyThere = email in data.split('\n').map((s) => s.split(', ')).map((l) => l[0]);
  }); 
  if (alreadyThere) {
    return;
  }
  fs.appendFile("mailinglist.csv", `\n${email}, ${crypto.randomBytes(20).toString("hex")}`, (err) => {
    if (err) throw err;
  });
}


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