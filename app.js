const express = require('express')
const app = express()
const port = proces.env.PORT || 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const morgan = require('morgan')
app.use(require(cors()))
app.disable('x-powered-by')
if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))

const carsRoutes = require('./src/routes/cars')
app.use('/cars', carsRoutes)

app.use((req, res, next) => {
    const status = 404
    const message = `Could not ${req.method} ${req.url}`
    next({ status, message })
  })
 
  app.use(function( err, req, res, next ){
    const errorMessage = {}
    errorMessage.status = err.status || 500
    errorMessage.message = err.message || 'Something went wrong'
    if(process.env.NODE_ENV !== 'production'){
      errorMessage.stack = err.stack
    }
    res.status(errorMessage.status).send(errorMessage)
  })
  
  const listener = () => console.log(`Listening on port ${port}!`)
  app.listen(port, listener)
  
  module.exports = app