const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 

let urlencodedParser = bodyParser.urlencoded({extended: false});


let server = express();

server.use(express.static('public'));


server.get('/', ( req, res) => {
    res.send("The server is up and running. You are at /"); 
});

server.get('/aboutus', (req, res) =>{
    res.send("We are software developers. We have a great service"); 
});

server.get('/aboutus/it', (req, res) =>{
    res.send("We are the IT department. We help you to solve with the problems"); 
});

server.get('/object', (req, res) =>{
    res.send({firstname: "John", lastname: "Connor", favoritemovie:"Harry Potter"}); 
});

server.get('/update', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/updateform.html')); 
});

server.post('/update', urlencodedParser, (req, res) => {
    console.log(req.body.firstName);
    res.send("Data from the form:" + req.body.firstName);
});

server.listen(8000, function(){
    console.log('The serveri is listening on port 8000.'); 
});

