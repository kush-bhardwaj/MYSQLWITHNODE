const con = require('./src/db/db')
const express = require('express')
const body_parser = require('body-parser')
const app = express()
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
const obj = { name: "kush" }

app.get('/', function (req, res, next) {
    //   res.end(JSON.stringify(obj)) // send obj and convert into json
    res.sendFile(__dirname + "/register.html")
})

app.post('/', (req, res) => {
    // console.log(req.body)
    const data = {
        name: req.body.name,
        age: req.body.age
    }

    // Connect to the database
    con.connect((err) => {
        if (err) throw err
        // Use parameterized query to avoid SQL injection
        const sql = "INSERT INTO details(name,age) VALUES (?,?)";

        // Execute the query with parameters
        const values = [data.name, data.age]
        con.query(sql,values, function (error, result) {
            if (error) throw error
            res.json(result)
        })
    })

})

app.listen(2000, () => {
    console.log("server start")
})
