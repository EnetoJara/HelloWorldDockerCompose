const mongoose = require('mongoose')

const databaseConnection = 'mongodb://mongo/test'

var kittySchema =  mongoose.Schema({ name: String })

kitten = exports.kitten = mongoose.model('kitten', kittySchema)

exports.initializeMongo = function () {
    mongoose.connect(databaseConnection)
    console.log('tryingg to connect to '+ databaseConnection)
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'on error message'))
    db.on('open', function () {
        console.log('connected')
        addCat()
    })
}

function addCat () {
    var silence = new kitten({
        name: 'silence ' + Math.random()
    })

    silence.save(function (err, cat) {
        if (err) return console.error(err)
        else console.log('there is a new cat')
    })
}
