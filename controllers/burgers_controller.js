// Dependencies ==========================
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
// =======================================

// Routes ================================
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(['burger_name', 'devoured'], function (err, result) {
        if (err) throw err;
        res.json(result);
    });
    res.redirect('/');
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = 'id = ' + req.params.id;
    burger.updateOne({ devoured: req.body.devoured}, condition, function (err, result) {
       if (err) throw err;
       res.json(result);
    });
    res.redirect('/');
});

router.delete("/api/burgers/:id", function(req, res) {
    const condition = 'id = ' + req.params.id;
    burger.deleteOne(condition, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
    res.redirect('/');
})
// =======================================

// Export to server.js ===================
module.exports = router;
// =======================================

