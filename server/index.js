const express = require('express')
const app = express()
const path = require('path')
const syncAndSeed = require('./db/seed')
const school = require('./api/School')
const student = require('./api/Student')

const port = process.env.PORT || 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
)

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, '..', 'index.html'))
)

app.use('/api/schools', school)
app.use('/api/students', student)

// ERROR HANDLING:
app.use((error, req, res, next) => {
  let errors
  if (error.errors) {
    errors = error.errors.map(err => err.message)
  } else if (error.original) {
    errors = [error.original.message]
  } else {
    errors = [error.message]
  }

  console.error(errors)
  res.status(error.status || 500).send({ errors })
})

syncAndSeed().then(() =>
  app.listen(port, () => console.log(`Now listening to port: ${port}`))
)
