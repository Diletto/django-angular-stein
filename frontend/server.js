var express = require('express');
var app = express();


app.use(express.static(__dirname + "/dist"));

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + "/dist" });
});
app.listen(8081);

console.log("Server running on port 8081");