var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var cat = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/api/burgers", function(req, res) {});

router.post("/api/burgers/:id", function(req, res) {});
router.put("/api/burgers/:id", function(req, res) {});

router.delete('/api/burgers/:id', function(req, res) {});

module.exports = router;
