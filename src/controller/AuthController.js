const { name } = require('ejs');
const con = require('../db/db');
const { genPassword, comparePassword, comparePassowrd } = require('../Utils/utlis');
//signup
exports.signup = async function (req, res, next) {
    try {
        const signupData = req.body
        const passowrd = genPassword(signupData.password)
        const sql = 'insert into account(name,email,password,mobile) values(?,?,?,?)';
        const values = [signupData.name, signupData.email, genPassword(signupData.password), signupData.mobile]
        con.query(sql, values, (error, result) => {
            if (error) { console.log("unable to insert data") }
            else {
                res.json({
                    status: "success",
                    message: "Signup SuccessFullly",
                    data: {
                        name: signupData.name,
                        email: signupData.email,
                        mobile: signupData.mobile,
                        passowrd:values[2]
                    }
                })
            }
        })
    } catch (errros) {
        res.json({
            status: "failed",
            message: "unable to signup check carefully your details"
        })
    }
}

//login
exports.login = async (req, res, next) => {
    try {
        const loginData = req.body
        const sql = 'select * from account where email =?';
        const value = [loginData.email, loginData.password];
        con.query(sql, value[0], function (error, result) {
            if (error) { console.log("unable to find query") }
            else {
                const hashPass = result[0].password
                if (comparePassword(value[1], hashPass)) {
                    res.json({
                        status: "success",
                        message: "login SuccessFull",
                        data:{
                            name:result[0].name,
                            email:result[0].email,
                            mobile:result[0].mobile
                        }
                    })
                }
                else {
                    res.json({
                        status: "faild", message: "failed to loging"
                    })
                }
            }
        })
    } catch (err) {
        res.json({
            status: "failed",
            message: "something wrong to loging",
            error: err
        })
    }
}


//getsingle data
exports.getSingle = async function (req, res, next) {
    const id = [req.params._id];
    const sql = `select * from account where id =?`
    con.query(sql, id, function (error, result) {
        if (error) { console.log("unable to find user") }
        else {
            res.json({
                status: "success",
                data: result
            })
        }
    })
    //    con.query
}