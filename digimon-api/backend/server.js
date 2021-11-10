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