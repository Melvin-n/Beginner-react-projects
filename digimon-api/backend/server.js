const express = require('express')
const app = express()
const port = 4000

//middleware
app.use(express.urlencoded({extended: true}))

//import json file
const data = require('./digimon.json')

app.get('/', (req, res) => {
    res.send('Welcome to digimon API')
})

app.get('/digimon/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    res.send(data.filter(mon => {
        return mon.name.toLowerCase() === name
    }))
})



app.post('/digimon/name', (req, res) => {
    console.log(req.body.name)
    const search = req.body.name
    res.redirect(`http://localhost:4000/digimon/name/${search}`)
})

app.get('/digimon/attribute/:attribute', (req, res) => {
    const attribute = req.params.attribute.toLowerCase()
    console.log(attribute)
    res.send(data.filter(mon => {
        return mon.attribute.toLowerCase() === attribute
    }))
})

app.get('/digimon/stage/:stage', (req, res) => {
    const stage = req.params.stage.toLowerCase()
    res.send(data.filter(mon => {
        return mon.stage.toLowerCase() === stage
    }))
})

app.get('/digimon', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})