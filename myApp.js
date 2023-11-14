let express = require('express');
let app = express();




app.get("/", (req,res) => {
    //res.send("Hello Express");
    filePath = __dirname + '/views/index.html';  
    res.sendFile(filePath);  
  });

pubFolder = __dirname + '/public';
app.use('/public', express.static(pubFolder));






























 module.exports = app;
