var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist'));
var port = process.env.PORT || 4443;

var api = require('./api/api.router.js');
app.use('/api', api);
app.use('/api/*', api);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port);
