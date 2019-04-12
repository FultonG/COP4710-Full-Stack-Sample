//Packages from NPM
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'henry'
  });
   

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/example', function(req, res){
    res.send("This was an example request");
});

app.get('/exampleSql', function(req, res){
    connection.query('SELECT * FROM AUTHOR', function (error, results) {
        if (error){
            res.status(400)
            res.send(error)
            throw error;
        } 
        res.send(results);
      });
})

app.get('/author', function(req, res){
    connection.query(`SELECT * FROM AUTHOR WHERE authorFirst = '${req.query.author}'`, function(error, results){
        if(error){
            res.status(400);
            res.send(error);
            throw error;
        }
        res.send(results);
    })
})

app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);