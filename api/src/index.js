const express = require('express')
const query = require('./controllers/query')
const invoke = require('./controllers/invoke')
const enrollAdmin = require('./controllers/enrollAdmin')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to REST API for landrec Blockchain'))

app.get('/query', (req, res) => query.query(req, res))

app.get('/invoke', (req, res) => invoke.invokecc(req, res))

app.get('/enrollAdmin', (req, res) => enrollAdmin.enrollAdmin(req, res))

app.listen(port, () => console.log(`Landrec Blockchain REST API listening on port ${port}!`))
