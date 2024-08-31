const con = require('./src/db/db')
const express = require('express')
const body_parser = require('body-parser')
const AuthRouter = require('./src/routes/AuthRouter')
const app = express()
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: true }))
app.set('view engine', 'ejs') // EJS view engine
const obj = { name: "kush" }


//ROUTES

app.use('/api/v1/auth',AuthRouter)

//ROUTES END




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
        if (err) console.log( err)
        // Use parameterized query to avoid SQL injection
        const sql = "INSERT INTO details(name,age) VALUES (?,?)";

        // Execute the query with parameters
        const values = [data.name, data.age]
        con.query(sql, values, function (error, result) {
            if (error) throw error
             res.json(result)
        })
       // res.redirect('/details')
    })

})

app.get('/students', (req, res) => {
    con.connect((err) => {
        if (err) console.log(err)

        var sql = 'select * from details'
        con.query(sql, function (error, result) {
            if (error) throw console.log(error)
            // res.end(JSON.stringify(result))
            //    console.log(result)
            res.send(result)
        })
    })
})


app.get('/details', function (req, res) {
    con.connect(function (err) {
        if (err)  console.log(err)
        con.query('select * from details',function(error, result){
            if(error) throw console.log(error)
            res.render(__dirname+"/details", { details: result })
        })
    })
})
app.listen(2000, () => {
    console.log("server start http://localhost:2000");
})
