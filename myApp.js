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
    let theJson = "Hello json";
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": theJson.toUpperCase() });
    } else {
      res.json({ "message": theJson });
    }
 });



























 module.exports = app;
