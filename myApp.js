let express = require('express');
let app = express();
// app.get("/", (req,res) {
//   res.send("Hello Express");    
// });
//console.log("Hello World");




app.get("/", (req,res) => {
    res.send("Hello Express");
    filePath = __dirname + '/views/index.html';  
    res.sendFile(filePath);  
  });
  































 module.exports = app;
