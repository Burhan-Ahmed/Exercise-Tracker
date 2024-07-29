const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path');
const user = require('./models/Arch')
port = 4000

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/Exercises', {
}).then(
    console.log('DataBase Connected')
)

app.get('/', async (req, res) => {
    const logs = await user.find()
    res.render('exercise.ejs', { logs })
})
app.post('/', async (req, res) => {
    const id = req.body.id
    await user.findByIdAndDelete(id)
    res.send('User deleted successfully');
})

app.post('/createExercise.ejs', async (req, res) => {
    const username = req.body.uname
    const descp = req.body.descrip
    const timing = req.body.dura
    const date = req.body.date

    const info = new user({
        name: username,
        description: descp,
        duration: parseInt(timing, 10),
        date: new Date(date)
    })
    await info.save()
    res.send('New Log Added Successfully!')
})

app.get('/createExercise.ejs', (req, res) => {
    res.render('createExercise.ejs')
})

app.get('/Statistical.ejs', async (req, res) => {
    const Data = await user.find().select('name duration');
    res.render('Statistical.ejs', { Data })
})

app.listen(port, () => {
    console.log('Your Server is Live at : ', port)
})