const mysql=require("mysql2");
module.exports.dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "cfg"      
})
