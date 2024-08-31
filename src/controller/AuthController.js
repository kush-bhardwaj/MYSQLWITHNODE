const con = require('../db/db')
//signup
exports.signup = async function (req, res, next) {
    const signupData = req.body
    const sql = 'insert into account(name,email,password,mobile) values(?,?,?,?)';
    const values = [signupData.name, signupData.email, signupData.password, signupData.mobile]
    console.log(values)
     con.query(sql, values, (error, result) => {
            if(error){console.log("unable to insert data")}
            else{
                res.json({
                    status:"success",
                    message:"data insert successfully",
                })
            }
    })

}

//getsingle data
exports.getSingle = async function(req, res, next){
    const id = [req.params._id];
    const sql =`select * from account where id =?`
    con.query(sql,id,function(error,result){
        if(error){console.log("unable to find user")}
        else{
            res.json({
                status:"success",
                data:result
            })
        }
    })
//    con.query
}