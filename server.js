const express = require('express')
const app = express()
port = 4000

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log('Your Server is Live at : ', port)
})