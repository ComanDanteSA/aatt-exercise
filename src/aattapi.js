const express = require('express');
const app = express();
const request = require('request');

const options = { 
    method: 'GET'
};


app.get('/', function(req, res) { 
    request(options, function(err, res, body) {  
    });
    var timestamp = + new Date();
    var miniproject = ({
        message: 'Automation for the People',
        timestamp: timestamp
    })
    res.json(miniproject) // returning the response.
  });

app.listen(3000);