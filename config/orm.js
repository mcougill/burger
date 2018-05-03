//mySQL queries

//require connection to mySQL database
var connection = require("./connection.js");

var orm = {

    
    // selectAll()
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            if(cb){cb(result);}
        });
    },

    // insertOne()
    insertOne: function (table, col1, col2 ,val1, val2) {
        var queryString = "INSERT INTO ??(??, ??) VALUES (?, ?)";
        connection.query(queryString, [table, col1, col2 ,val1, val2], function(err) {
            if (err) throw err;
        });
    },

    // updateOne()
     updateOne: function (table, col1, val1, col2, val2) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col1, val1, col2, val2], function(err) {
           if (err) throw err;
            
          });
     }
    }
  

module.exports = orm;
