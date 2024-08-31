const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sqlwithnode"
})
con.connect(function (err) {
    if (err) { console.log("failed to connect database") }
    else {
        console.log("Database Connected")
    }
    // const sql = `CREATE TABLE employee (
    //  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    //  name VARCHAR(55) NOT NULL DEFAULT 'NOT ENTERED', 
    //  email VARCHAR(155) NOT NULL DEFAULT '@gmail.com', 
    //  mobile VARCHAR(15) NOT NULL DEFAULT 'NUMBER MISSING' , 
    //  password VARCHAR(55) NOT NULL DEFAULT 'NOT ENTERED');`


    // con.query(sql, function (error, result) {
    //     if (error) { console.log("unable to create table") }
    //     else { console.log("tables created") }
    // })
})

module.exports = con;