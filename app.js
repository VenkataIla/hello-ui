'use strict';

const express = require('express');
const request = require('request');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/hello', (req, res) => {
    let options = {
        url: "http://192.168.99.101:30171/hello",
        method: 'GET',
        json: true,
        headers: req.defaultHeaders
    };

    request(options, function (error, response) {
        if (!error) {
            let data = response.body;
            var dateformat = dateBuilder();
            console.log(dateformat + " " + data);
            res.send(dateformat + " " + data);
        }
    })
});

let dateBuilder = function(){
    var date = new Date,
    dateformat = [("0" + date.getDate()).slice(-2),
    ("0" + (date.getMonth() + 1)).slice(-2),
    date.getFullYear()].join('/') + ' ' +
    [("0" + date.getHours()).slice(-2),
    ("0" + (date.getMinutes())).slice(-2)].join(':');
    return dateformat;
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);