const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');


router.get('/', function (req, res, next) {
  res.render('index');
})

router.get('/dashboard', function (req, res, next) {
  // Retrieve tweet from database after ordering by descending content length
  db.query(`SELECT * FROM tweets ORDER BY length(content) DESC`)
    .then(function (tweets) {
      res.render('dashboard', {tweets: tweets});
    })
    .catch(function (err) {
        res.send(err);
    });
})

router.post('/dashboard', function (req, res, next) {
  const params = req.body;
  // From the form on page, enter title and content values to database
  db.query(`
    INSERT INTO tweets (title, content) VALUES ($<title>, $<content>)
  `, params
  ).then(function () {
    res.redirect('/dashboard')
  }).catch(function (err) { res.send(err); })
})

module.exports = router;
