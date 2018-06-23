const Sequelize = require('sequelize');

const config = require('./config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

function defineModel(name, attributes,jtabName) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        
        if (typeof value === 'object' && value['type']) {// 如果 字段除了设置字段类型以外，还有其他修改、设置
            value.allowNull = value.allowNull || false;//如果设置了allowNull就设置为准，否则默认notNull，这项是boolean类型，所以这样把设置更新进去
            attrs[key] = value;//字段的其他设置，用键、值的形式更新进去
        } else {//如果字段只设置了类型，没有其他限制，那就1更新字段类型、2设为非空
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    return sequelize.define(name, attrs, {
        tableName: jtabName,
        timestamps: false,
    });
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN','DATE'];

var exp = {
    defineModel: defineModel,
};

for (let type of TYPES) {
    exp[type] = Sequelize[type];
}
// 包含两样东西：1.一个函数defineModel;2.支持的所有字段类型
module.exports = exp;