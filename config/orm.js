//mySQL queries

var connection = require("./connection.js");

var orm = {

    // selectAll()
    selectAll: function (whatToSelect, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [whatToSelect], function (err, result) {
            if (err) throw err;
            cb(result)
        });
    },

    // insertOne()
    insertOne: function (tableInput, values, cb) {
        var queryString = "INSERT INTO burgers ?? VALUES ?";
        connection.query(queryString, [tableInput, values], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    // updateOne()
    updateOne: function (updateTable, updateCol, newVal, filterCol, filterVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [updateTable, updateCol, newVal, filterCol, filterVal], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }


};

module.exports = orm;
