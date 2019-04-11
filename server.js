//Packages from NPM
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/example', function(req, res){
    res.send("This was an example request");
})

app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);