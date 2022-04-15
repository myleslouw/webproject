const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json())


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Absorberknife421',
    database: 'employeeSystem'
});


app.post('/create', (req, res) => {         //the server side post reqeust for creating an employee
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;         //data  to be sent
    const password = req.body.password;

    db.query(
        "INSERT INTO employeelogin (employeeName, employeeEmail, employeeUsername, employeePassword) VALUES (?,?,?,?)",
        [name, email, username, password],
        (err, result) => {
            if (err) {
                console.log(err);         //if there is an error with the query it will be logged
            } else {
                res.send("New Employee Created!");
            }
        }
    );
});


app.post('/login', (req, res) => {
    const username = req.body.loginUsername;         //data  to be sent
    const password = req.body.loginPassword;

    db.query(
        "SELECT * FROM employeeLogin WHERE employeeUsername = ? AND employeePassword = ?",
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);         //if there is an error with the query it will be logged
                res.send({ error: err })           //front end is expecting object so we send this
            }

            //if there is a user with those details
            if (result.length > 0) {
                res.send(result);
            } else {  //otherwise if there isnt
                res.send({ message: "No user with current details!" })
            }
        }
    );
});

app.listen(3001, () => {
    console.log("_*NICE! Server is Running*_")
})