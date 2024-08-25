const nodemailer = require("nodemailer")
const dotenv = require("dotenv").config()

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

module.exports = {
    confirmationMail: confirmationMail
}
