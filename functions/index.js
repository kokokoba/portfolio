const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

const app = express();
const nuxt = new Nuxt({
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/assets/'
    }
});

function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    return new Promise((resolve, reject) => {
        nuxt.render(req, res, (promise) => {
            promise.then(resolve).catch(reject);
        });
    });
}

app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app);


// const functions = require('firebase-functions');
// const nodemailer = require('nodemailer')
// const gmailEmail = functions.config().gmail.email
// const gmailPassword = functions.config().gmail.password
//
// const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: gmailEmail,
//         pass: gmailPassword
//     }
// })
//
// exports.sendMail = functions.https.onCall((data, context) => {
//     let email = {
//         from: gmailEmail,
//         to: data.destination,
//         subject: 'test message',
//         text: 'This is a test message from vue.'
//     }
//     mailTransport.sendMail(email, (err, info) => {
//         if (err) {
//             return console.log(err)
//         }
//         return console.log('success')
//     })
// })