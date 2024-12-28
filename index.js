const { error } = require("console");
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "lo_db",
})

connection.connect((err) =>{
    if(err){
        console.error("connect error: " + err.stack);
        return;
    }
    console.log("connect succese!");
});


connection.query("select * from student", (err, result) =>{
    if(err){
        console.error("check error: " + err.message);
        return;
    }
    console.log(result);
});

let sql = "insert into student values(?, ?, ?)";
let params = [345, "zifeng wang", 21];

connection.query(sql, params, (err, result) =>{
    if(err){
        console.error("error: " + err.message);
        return;
    }
    console.log("insert success!");
})

connection.end();
// connection.destroy();