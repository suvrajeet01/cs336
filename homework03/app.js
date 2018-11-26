const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function getYears(start_date) {
    dateString = start_date;
    var today = new Date();
    var startDate = new Date(dateString);
    var years = today.getFullYear() - startDate.getFullYear();
    var m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }
    return years;
}

// a list of all people objects
app.get('/people', (req, res) => {
    people.find().toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(data);
    });
});

// Add new people from a post request
app.post('/people', (req, res) => {
    people.find().toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var newPerson = {
            first_name: req.body.first_name,
            last_name: req.body.last_name, 
            id: req.body.id, 
            start_date: req.body.start_date
        };
        people.insertOne(newPerson, function (err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.sendStatus(200);
        });
    });
});

// the full record for the person with the given ID
app.get('/person/:id', (req, res) => {
    people.find({id: req.params.id}).toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(data[0]);
    });
});

app.put('/person/:id', (req, res) => {
    people.find().toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var newPerson = {
            first_name: req.body.first_name,
            last_name: req.body.last_name, 
            id: req.body.id, 
            start_date: req.body.start_date
        };
        console.log(req.body)
        people.updateOne({id: req.params.id}, {$set: newPerson}, function (err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.sendStatus(200);
        });
    });
});

app.delete('/person/:id', (req, res) => {
    people.find().toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        people.deleteOne({id: req.params.id}, function (err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.sendStatus(200);
        });
    });
});

// the full name (i.e., first & last concatenated into one string) for the person with the given ID 
app.get('/person/:id/name', (req, res) => {
    people.find({id: req.params.id}).toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(200, {first_name: data[0].first_name, last_name: data[0].last_name});
    });
});

// the seniority (i.e., number of years with the organization) of the person with the given ID — Report this as you would report an age (i.e., rounded down to the nearest whole year). 
app.get('/person/:id/years', (req, res) => {
    people.find({id: req.params.id}).toArray(function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        res.json(getYears(data[0].start_date));
    });
});

app.use(express.static('public'));

var MongoClient = require('mongodb').MongoClient;
var db;
var people;
MongoClient.connect('mongodb://cs336:' + process.env.MONGO_PASSWORD + '@ds151963.mlab.com:51963/tpt3-cs336', function (err, client) {
    if (err) throw err;

    db = client;
    people = db.collection('people');
    app.listen(port, function () {
        console.log('Server started: http://localhost:' + port + '/');
    });
})
