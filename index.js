const express = require('express')
const app = express()
const cors = require('cors')
const port = parseInt(process.env.PORT || 3000)
const data = require('./cohorts.js')

app.use(cors({origin: true, credentials: true}))

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

  if (!record[0]) {
    res.status(404).json({
      error: {
        message: 'No Record! Try another ID'
      }
    })
  } else { res.json({ data: record[0] }) }


})
// res.length == 0
app.listen(port)
  .on('listening', console.log.bind(console, `Listening on ${port}`))
