// imports
const express = require('express')
const expshbs = require('express-handlebars')
const app = express()
const conn = require('./database/conn')

// Routes
const postRoutes = require('./routes/postRoutes')

// models
const Post = require('./models/Post')

// engine
app.engine('handlebars', expshbs.engine())
app.set('view engine', 'handlebars')


// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', postRoutes)


// Connection { force: true }
conn.sync({ force: true }).then(() => {
    app.listen(3000)

}).catch((err) => console.log(err))