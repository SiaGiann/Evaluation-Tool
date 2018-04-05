const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const teachersRouter = require('./teachers/router')
const authRouter = require('./authentication/router')
const tokenMiddleware = require('./authentication/middleware').tokenMiddleware
const requireTeacher = require('./authentication/middleware').requireTeacher

const port = process.env.PORT || 3030

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(tokenMiddleware)
  .use(teachersRouter)
  .use(authRouter)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.listen(port, () => {
  console.log(`listening for incoming connections on http://localhost:${port}`)
})
