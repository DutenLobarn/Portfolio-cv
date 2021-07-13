// express
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const sgMail = require('@sendgrid/mail')

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.post('/email', (req, res) => {
console.log('req.body:' , req.body)
sendMejl(req.body.from, req.body.subject, req.body.phone, req.body.html)
.then((response) => {
    res.send(response)
})
.catch((error) => {
    console.error(error)
    res.send(error)
})
})

app.listen(port);

function sendMejl(from, subject, phone, html){
    
    const apiKey = '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';
    // const apiKey = process.env.REACT_APP_APIKEY;
    
    sgMail.setApiKey(apiKey)

    const msg = {
        to: 'mdbeautyklinik@gmail.com',
        from,
        subject,
        html: html+" "+phone,
    }
    return sgMail.send(msg)
}