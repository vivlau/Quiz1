const pgp = require('pg-promise')();

const db = pgp({
    host: 'localhost',
    database: 'tweetdb'
})

module.exports = db;
