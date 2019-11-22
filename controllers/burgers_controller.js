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

router.post("/api/burgers", function (req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = 'id = ' + req.params.id;

    burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
        if (result.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    const condition = 'id = ' + req.params.id;

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})
// =======================================

// Export to server.js ===================
module.exports = router;
// =======================================

