const orm = require('../config/orm');

const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },
    insertOne: function (burgername, cb) {
        orm.insertOne(burgername,function (res) {
            cb(res);
        });
    },
    updateOne: function (condition, cb) {
        orm.updateOne(condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;