const express = require('express'); 
const mysql = require('mysql');


const server = express(); 

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lexnode'
});

server.get('/', (req, res) => {
    console.log("Inside/."); //console to check why the code is not run.
    con.connect( function(){
        console.log("Inside connection.");
        con.query("SELECT * FROM cars", function( err, result , fields){
            console.log("Inside query.")
            res.send(result);
        });
    });
} );

server.listen(8000, () => {
    console.log('The server is listening on port 8000.');
}); 


