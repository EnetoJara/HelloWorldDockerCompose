const express = require('express')
const db = require('./database')

const app = express()

db.initializeMongo();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000, function () {
    console.log('listening 3000')
})

app.get('/test', function (req, res) {
    db.kitten.find(function (err, cat) {
        if (err) return res.error(err)
        else return res.json(cat)
    })
})