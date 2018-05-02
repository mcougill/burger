var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//express routes 
router.get("/", function(req,res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    burger.selectAll(function (data){
        var hbsObj = {burgers:data};
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/burgers/insertOne", function(req,res){
    burger.insertOne(["burger_name","devoured"], [req.body.burger_name, req.body.devoured], function(){
        res.redirect("/burgers");
    });
});

router.put("/burgers/updateOne/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);
    burger.updateOne({devoured: req.body.devoured}, condition, function(){
       res.redirect("/burgers");
    });
});

module.exports = router;