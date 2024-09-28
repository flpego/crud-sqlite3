const sqlite3 = require('sqlite3');
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'database' ,'products.db'), (err) => {
    if (err) { 
        console.error(err)
    } else {
        console.log('Connected to the database succesfuly')
     }
});

module.exports = db;