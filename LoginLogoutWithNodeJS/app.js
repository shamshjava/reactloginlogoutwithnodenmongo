const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/',routes.verify);
router.post('/login',routes.login);
// parse application/json
app.use(bodyParser.json());
app.use('/', router);


module.exports = app;