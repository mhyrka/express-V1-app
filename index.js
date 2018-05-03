const express = require('express')
const app = express()
const cors = require('cors')
const port = parseInt(process.env.PORT || 3000)
const data = require('./cohorts.js')


function filterDataById(data, id) {
  return data.filter(element => {
    return element.id == id
  })
}

app.get('/', (req, res, next) => {
  res.json({ data })
})


app.get('/:id', (req, res) => {
  let record = filterDataById(data, req.params.id)
  res.json(record)
})

app.listen(port)
  .on('listening', console.log.bind(console, `Listening on ${port}`))
