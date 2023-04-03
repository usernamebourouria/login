
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
   );
//    cors connex between server and client applications
const db = mysql.createConnection({
      host: "mysql-akram203.alwaysdata.net",
      user: "akram203",
      password: "akram2001",
      database: "akram203_pfe",
    });
    app.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        
        db.execute(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password],
            (err, result)=> {
                if (err) {
                    res.send({err: err});
                }
        
                if (result.length > 0) {
                    res.send( result);
                    }else({message: "Wrong username/password comination!"});
                })
            }
        );
     
app.use(express.json());
app.listen(3001, () => {
   console.log("running server");
});
