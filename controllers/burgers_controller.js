// Dependencies ==========================
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
// =======================================

// Routes ================================
router.get("/", function (req, res) {
    burger.selectAll(function (err, data) {
        const hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

router.put("/api/burgers", function (req, res) {
    burger.updateOne({
        devoured: true
    }, req.body, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.delete("/api/burgers", function(req, res) {
    const id = parseInt(req.body.id);
    burger.deleteOne(id, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
})
// =======================================

// Export to server.js ===================
module.exports = router;
// =======================================

