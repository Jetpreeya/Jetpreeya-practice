const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root23",
    database: "db_hr"
})

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employee;", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    const EmployeeID = req.body.EmployeeID;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Gender = req.body.Gender;
    const Email = req.body.Email;
    const Salary = req.body.Salary;
    const StartworkDate = req.body.StartworkDate;

    db.query("INSERT INTO employee (EmployeeID,FirstName,LastName,Gender,Email,Salary,StartworkDate ) VALUES(?,?,?,?,?,?,?)",
        [EmployeeID, FirstName, LastName, Gender, Email, Salary, StartworkDate],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Values inserted")
            }
        }
    );
})

app.put('/update',(req,res) => {
    const EmployeeID = req.body.EmployeeID;
    const Salary = req.body.Salary;
    db.query("UPDATE employee SET Salary = ? WHERE EmployeeID = ?" , [Salary, EmployeeID], (err,result) => {
        if (err){
            console.log(err);
        } else {
            res.send(result);
        }
    
});
})

app.listen('3001', () => {
    console.log('Server is running on port 3001');
})