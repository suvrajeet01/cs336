const express = require('express')
var bodyParser = require("body-parser");
const app = express()
const port = 3000

HttpStatus = require('http-status-codes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Got a GET request')
})

app.get('/*', function (req, res) {
    res.send(HttpStatus.getStatusText(HttpStatus.FORBIDDEN)
    )
})

app.head('/', function (req, res) {
    res.send('Hello World!')
})

app.head('/*', function (req, res) {
    res.send(HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
    )
})

app.post('/', function (req, res) {
    res.send(req.body)
});

app.post('/forms', function (req, res) {
    res.send(req.body)
});

app.post('/*', function (req, res) {
    res.send(HttpStatus.getStatusText(HttpStatus.NO_CONTENT)
    )
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.put('/*', function (req, res) {
    res.send(HttpStatus.getStatusText(HttpStatus.IM_A_TEAPOT)
    )
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.delete('/*', function (req, res) {
    res.send(HttpStatus.getStatusText(HttpStatus.IM_A_TEAPOT)
    )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

