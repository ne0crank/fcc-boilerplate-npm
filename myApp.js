require('dotenv').config();
let express = require('express');
let app = express();


app.get("/", (req,res) => {
    //res.send("Hello Express");
    let filePath = __dirname + '/views/index.html';  
    res.sendFile(filePath);  
  });

let pubFolder = __dirname + '/public';
app.use('/public', express.static(pubFolder));


app.get('/json', (req,res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
      res.json({"message": "HELLO JSON"});
    } else {
      res.json({"message": "Hello json"});
    }
})



























 module.exports = app;
