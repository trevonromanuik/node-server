var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('<h1>Node Server</h1>');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});