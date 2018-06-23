const db = require('../db');

module.exports = db.defineModel('kpid', {
    id:{
        type:db.INTEGER,
        primaryKey:true
    } ,
    name: db.STRING,
    value: db.DOUBLE,
    ctime: db.DATE,
},'kpis');