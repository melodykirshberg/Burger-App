// Import ORM
const orm = require('../config/orm');
// =======================================

// Create Burger Object ==================
const burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', cb);
    },
    insertOne: function (set, cb) {
        orm.insertOne('burgers', set, cb)
    },
    updateOne: function (set, id, cb) {
        orm.updateOne('burgers', set, id, cb);
    },
    deleteOne: function (id, cb) {
        orm.deleteOne('burgers', id, cb);
    }
};
// =======================================

// Exports to the burgerController =======
module.exports = burger;
// =======================================
