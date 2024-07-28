const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path');
const user = require('./Arch')
port = 4000

mongoose.connect('mongodb://localhost:27017/ExercisesDataset', {
}).then(
    console.log('DataBase Connected')
)

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/exercise.ejs', async (req, res) => {
    const logs = await user.find()
    console.log(logs)
    res.render('exercise.ejs', { logs })
})
app.get('/createExercise.ejs', (req, res) => {
    res.render('createExercise.ejs')
})
app.get('/CreateUser.ejs', (req, res) => {
    res.render('CreateUser.ejs')
})

app.listen(port, () => {
    console.log('Your Server is Live at : ', port)
})