const express = require('express')
const app = express()
const path = require('path')
const syncAndSeed = require('./db/seed')
const school = require('./api/School')
const student = require('./api/Student')

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
)

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'index.html'))
)

app.use('/api/schools', school)
app.use('/api/students', student)

syncAndSeed().then(() =>
  app.listen(port, () => console.log(`Now listening to port: ${port}`))
)
