import holidays from "./holidays.js"
import express from "express"

const server = express()

server.get('/holidays', (req, res) => res.send(holidays))

server.get('/is-today-holiday', (req, res) => {
    const hoje = new Date();
    const v = holidays.find(v => v.date === hoje.toLocaleDateString())
    if (v === undefined) {
        res.send('Não, hoje não é feriado')
    }
    else {
        res.send(`Sim, hoje é ${v.name}`)
    }
})

server.get('/holidays/:id', (req, res) => {
    let id = req.params.id
    const month = '0'
    if (id.length === 1) {
        id = month + id
    }
    const v = holidays.filter(v => v.date.split('/')[0] === id)
    if (v.length === 0) {
        res.send('Não tem feriado')
    }
    else {
        res.send(v)
    }
})

server.listen(5000)