// server.js
require('rootpath')();
var api = require('./index');
var express = require('express');
var app = require('./app');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(api.apiRouter);

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
// app.use(expressJwt({
//     secret: config.secret,
//     getToken: function (req) {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;
//         }
//         return null;
//     }
// }).unless({ path: ['/users/authenticate', '/users/register'] }));

// // routes
// app.use('/users', require('./controllers/users.controller'));

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 8080;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

module.exports = app;