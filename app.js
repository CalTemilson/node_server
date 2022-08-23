const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/profile', (req, res) => {
    res.send('HEY TEMILSON!')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })