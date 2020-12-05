const express = require('express')
const path = require('path')

const routes = require('./src/routes.js')

const app = express()

// Uses

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Sets

app.set('views', path.join(__dirname, 'src', 'views'))
app.set('view engine', 'hbs')

app.get('/', routes.index)
app.get('/name', routes.name)
app.get('/game', routes.game)
app.get('/result/:name&:hits&:time&:grade&:evaluate', routes.result)
app.get('/sobre-nos', routes.sobrenos)

app.listen(process.env.PORT || 3000, () => console.log('Server is running...'))