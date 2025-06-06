const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const exphbs = require('express-handlebars')
const port = 3001

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'resources/views/layouts'),
  partialsDir: path.join(__dirname, 'resources/views/partials')
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resources/views'))


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
