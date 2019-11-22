// Dependencies ==========================
const express = require("express");
const router = express.Router();
// =======================================

// Import burger.js ======================
const burger = require("../models/burger.js");
// =======================================

// Routes ================================
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post("/burgers", function (req, res) {
    burger.insertOne([
        'burger_name'
    ], [
        req.body.burger_name
    ], function(result) {
        res.redirect('/');
    });
 });

router.put("/burgers/:id", function (req, res) { 
    const condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(result) {
        res.redirect('/');
    })
});
// =======================================

// Export to server.js ===================
module.exports = router;
// =======================================

