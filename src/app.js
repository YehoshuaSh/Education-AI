const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3001

const stat = require('./utils/db_req')

// Define paths for Express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// Setup handelbars engine and views location 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Welcome to Education AI',
        name: 'Avshalom Tam'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us',
        name: 'Avshalom Tam'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is some helpful text',
        name: 'Avshalom Tam'
    })
})

var course = ""
var lecture = ""

app.get('/choose_course', (req, res) => {
    res.render('choose_course', {
        title: 'Welcome!',
        name: 'Avshalom Tam'
    })
})

app.get('/choose_lecture', (req, res) => {
    // save the course name
    course = req.query.course

    res.render('choose_lecture', {
        title: 'Course page',
        name: 'Avshalom Tam'
    })
})

app.get('/statistics-all', (req, res) => {
    // save the lecture number
    lecture = req.query.lect

    // make the db search here
    const db_response = stat(course, lecture)

    res.render('statistics-all', {
        title: 'Statistics-all page',
        course,
        lecture,
        percent: db_response,
        name: 'Avshalom Tam'
    })
})

app.get('/statistics-stud', (req, res) => {
    res.render('statistics-stud', {
        title: 'Statistics-student page',
        name: 'Avshalom Tam'
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404 page',
        name: 'Avshalom Tam',
        error_msg: 'Page not found'
    })
})

// const port = 3001
app.listen(port, () => {
    console.log('server is running on port ' + port)
})
