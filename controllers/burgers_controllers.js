var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//express routes 

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = { burgers: data };

        for (i = 0; i < hbsObj.burgers.length; i++) {
            hbsObj.burgers[i].devoured = parseInt(hbsObj.burgers[i].devoured);
        }

        res.render("index", hbsObj);
    });

});

router.post("/", function (req, res) {
    burger.insertOne(req.body.newBurger);
    res.redirect("/");
});

router.put("/:id", function (req, res) {
    burger.updateOne(req.params.id);
    res.redirect("/");
});

module.exports = router;