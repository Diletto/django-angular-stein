var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/public" });
});
app.listen(8081);

console.log("Server running on port 8081");