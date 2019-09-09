// server.js
require('rootpath')();
var api = require('./index');
var app = require('./app');
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(api.apiRouter);

var port = process.env.NODE_ENV === 'production' ? 80 : 8080;
app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;