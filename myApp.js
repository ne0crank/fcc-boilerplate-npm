let express = require('express');
require('dotenv').config();
let app = express();


app.get("/", (req,res) => {
    //res.send("Hello Express");
    let filePath = __dirname + '/views/index.html';  
    res.sendFile(filePath);  
  });

let pubFolder = __dirname + '/public';
app.use('/public', express.static(pubFolder));


app.get('/json', (req,res) => {
    let message = (process.env.MESSAGE_STYLE === 'uppercase') ? "HELLO JSON" : "Hello json";
    res.json({"message": message});
})



























 module.exports = app;
