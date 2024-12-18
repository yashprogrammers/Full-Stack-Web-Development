const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

// app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello Post Request is here!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get('/index', (req, res) => {
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api',(req,res)=>{
    res.json({a:1,b:2,c:3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})