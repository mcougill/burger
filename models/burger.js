//use  ORM to interface w/ database

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(newBurger){
        orm.insertOne("burgers", "burger_name", "devoured", newBurger,"0");
    },

    updateOne: function(id){
        orm.updateOne("burgers", "devoured", "1", "id", id);   
    }
    
};

module.exports = burger;