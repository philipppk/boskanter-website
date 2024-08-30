const nodemailer = require("nodemailer")
const dotenv = require("dotenv").config()
const juice = require("juice")

const transporter = nodemailer.createTransport({
    host: "127.0.0.1",
    port: 1025,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "boskanter@proton.me", 
        pass: process.env.PM_PASSWORD
    }, 
    tls: {
        rejectUnauthorized: false
    }
})

async function confirmationMail(email, token) {
    await transporter.sendMail({
        from: '"Boskanter VZW" <info@boskanter.earth>',
        to: email,
        subject: "Confirm your email adress",
        text: `To confirm your subscription to the Boskanter newsletter, follow this link: ${process.env.DOMAIN}/en/newsletter/confirm/?${token}`,
        html: `<p>To confirm your subscription to the Boskanter newsletter, click <a href="${process.env.DOMAIN}/en/newsletter/confirm/?${token}">here</a>.</p>`
    })
}

const styles = {
    "h1, h2, h3, h4, h5, h6": "font-family: 'Courier New', Courier, monospace; font-weight: normal; text-transform: uppercase",
    "p": "font-family: 'Verdana', sans-serif",
    "img": "max-width: 100%; max-height: 15em; margin-left: auto: margin-right: auto; text-align: center;",
    "table": "border-collapse: collapse",
    "td, th": "border: 1px solid #555555"

}

async function sendNewsletter(recipients, content) {
    let html = '<table border="0" cellpadding="20" cellspacing="0" width="100%" style="background-color: #fff3d2">'
        + "<tr><td>" + applyStylesInline(content, styles) + "</td></tr>"
        + "<tr><td style='background-color: #004d1a; color: #ffffff'><footer style='text-align: center'>"
            + "<p style='color: #29cf60'>Dont want to receive these anymore? <br><a style='color: ##29cf60'>Click here to unsubscribe.</a></p>"
            + "<p>Koningsweg 1, 9660 Brakel, België - info@boskanter.be - 055/600617</p>"
            + "</footer></td></tr>"
        + "</table>"
    for (r of recipients) {
        await transporter.sendMail({
            from: '"Boskanter VZW" <info@boskanter.earth>',
            to: r,
            subject: "Newsletter",
            text: html,
            html: html
        })
    }
}

function applyStylesInline(html, styles) {
    for (el in styles) {
        html = html.replaceAll(new RegExp(`(?<=<(${el.split(/, */).join("|")}))`, "g"), ` style="${styles[el]}"`)
    }
    return html
}

module.exports = {
    confirmationMail: confirmationMail,
    send: sendNewsletter
}
