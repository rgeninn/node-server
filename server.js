const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;
var app = express();


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}:  ${req.method}  ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server log.');
        }
    });
    next();
});

app.use(express.static(__dirname + '/assets'));

// FR

app.get('/FR/calendar', (req, res) => {
    res.sendFile(path.join(__dirname+'/FR/calendar/index.html'));
});

app.get('/FR/diagnostic', (req, res) => {
    res.sendFile(path.join(__dirname+'/FR/diagnostic/index.html'));
});

app.get('/FR/form', (req, res) => {
    res.sendFile(path.join(__dirname+'/FR/form/index.html'));
});

app.get('/FR/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname+'/FR/confirmation/index.html'));
});

app.get('/FR/booking', (req, res) => {
    res.sendFile(path.join(__dirname+'/FR/booking/index.html'));
});

// EN

app.get('/EN/calendar', (req, res) => {
    res.sendFile(path.join(__dirname+'/EN/calendar/index.html'));
});

app.get('/EN/diagnostic', (req, res) => {
    res.sendFile(path.join(__dirname+'/EN/diagnostic/index.html'));
});

app.get('/EN/form', (req, res) => {
    res.sendFile(path.join(__dirname+'/EN/form/index.html'));
});

app.get('/EN/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname+'/EN/confirmation/index.html'));
});

app.get('/EN/booking', (req, res) => {
    res.sendFile(path.join(__dirname+'/EN/booking/index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
