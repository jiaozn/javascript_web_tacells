const db = require('../db');

module.exports = db.defineModel('user', {
    id: {
        type: db.INTEGER,
        primaryKey: true
    },
    uname:db.STRING,
    password:db.STRING,
    ctime: db.DATE,
    updatetime: db.DATE
}, 'users');