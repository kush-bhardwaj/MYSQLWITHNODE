const express  = require('express')
const { signup, getSingle } = require('../controller/AuthController')
const AuthRouter = express.Router()
AuthRouter.post('/signup',signup)
AuthRouter.get('/single/:_id',getSingle)

module.exports = AuthRouter
