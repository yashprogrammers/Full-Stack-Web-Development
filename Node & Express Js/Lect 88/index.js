const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/contact', (req, res) => {
    res.send('<h1>8983051912</h1>')
})

app.get('/about', (req, res) => {
    res.send('Im Yash Kale')
})

app.get('/projects', (req, res) => {
    res.send('Msbte Study Zone')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})