const express = require('express')
const path = require('path')

const routes = require('./routes.js')

const app = express()

// Uses

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Sets

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', routes.index)
app.get('/name', routes.name)
app.get('/game', routes.game)
app.get('/result', routes.result)
app.get('/sobre-nos', routes.sobrenos)

app.listen(3333)