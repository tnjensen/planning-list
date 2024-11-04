import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "testdb"
})

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req,res) =>{
    res.json("Hello from backend");
})
app.get("/works", (req,res) =>{
    const q = "SELECT * FROM testdb.works";
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/works/:id", (req,res) =>{
    const workId = req.params.id;
    const q = "SELECT * FROM testdb.works WHERE id =" + workId;
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.delete("/works/:id", (req,res) =>{
    const workId = req.params.id;
    const q = "DELETE FROM testdb.works WHERE id = ?";
    
    db.query(q,[workId], (err,data) => {
        if(err) return res.json(err)
        return res.json("Work has been deleted.")
    })
})
app.put("/works/:id", (req,res) =>{
    const id = req.params.id;
    const q = "UPDATE testdb.works SET `composer` = ?,`title` = ? WHERE id = ?";
    
    const values = [
        req.body.composer,
        req.body.title
    ]
    db.query(q,[...values, id], (err,data) => {
        if(err) return res.json(err)
        return res.json("Work has been updated.")
    })
})

//If auth issue, because mysql creates default without password, use this code:
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';


app.post("/works", (req,res) => {
    const q = "INSERT INTO works (`composer`,`title`, `players` ) VALUES (?)"
    /* const values = ["title from backend","desc from backend", "cover picture from backend" ] */

    const values = [
        req.body.composer,
        req.body.title,
        req.body.playing
     ]

    db.query(q,[values], (err,data) =>{
        if(err) return res.json(err)
        return res.json("Work created successfully");
    })
})

app.listen(8082, () => {
    console.log("Connected to backend");
})