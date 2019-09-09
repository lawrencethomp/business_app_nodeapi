const express = require('express');
const apiRouter = express.Router();
var contact = require('./routes/contactRoutes');
var search = require('./routes/searchRoutes');
var bodyParser = require('body-parser');

apiRouter.use(bodyParser.json());
apiRouter.use("/contacts", contact.contactRouter);
apiRouter.use("/search", search.searchRouter);

module.exports.apiRouter = apiRouter;