const PORT = 5001;
const path =  require('path');
const Express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const home = require('./routes/home');

const app = Express();

app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(Express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);

app.listen(PORT, function () {
  console.log(`Server listening on http://localhost:${PORT}...`)
});














/* */
