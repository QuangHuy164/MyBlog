const express = require('express')
const morgan = require('morgan')
const app = express()
const handlebars = require('express-handlebars')
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars())
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
