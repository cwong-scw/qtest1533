const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/demo/:id', (req, res) => {
    eval('console.log("woah", ' + req.params.id + ')')
    res.send(`Hello Guest`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
