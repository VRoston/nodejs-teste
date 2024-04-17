const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Eu odeio Docker');
});

app.get('/about', function(req, res) {
    res.send('About Page');
});

app.get('/contact', function(req, res) {
    res.send('Contact Page');
});



app.listen(8081, function() {
    console.log('Server is running on url http://localhost:8081')
});