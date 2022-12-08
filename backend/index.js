require('dotenv').config
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})