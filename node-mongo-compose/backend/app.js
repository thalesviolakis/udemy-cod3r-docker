const express = require('express')
const restful = require('node-restful')
const app = express()
const mongoose = restful.mongoose

var bodyParser = require('body-parser');

const cors = require('cors')



//Database
mongoose.Promise = global.Promise
    // Conexão a ao mongodb
mongoose.connect('mongodb://db/mydb')

//Teste
//app.get('/',(req,resposta,next) => resposta.send('Backend'))

//Middlewares
// parse application/x-www-form-urlencoded

//app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
//app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

// ODM
const Client = restful.model('Client', {
    name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({ new: true, runValidators: true })


//Routes
Client.register(app, '/clients')

//Start app
app.listen(3000)