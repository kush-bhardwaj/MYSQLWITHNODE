const express  = require('express')
const { signup, getSingle, login } = require('../controller/AuthController')
const AuthRouter = express.Router()
AuthRouter.post('/signup',signup)
AuthRouter.post('/login',login)
AuthRouter.get('/single/:_id',getSingle)

module.exports = AuthRouter
