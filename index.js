const express = require('express')
const app = express()
const PORT = 4000
const users = require("./userData")
const userCtrl = require("./userController")
const middleware = require('./middleware')

app.use(express.json())

app.get('api/user', userCtrl.getAllUsers)//get all users
app.get("/api/users", userCtrl.getOneUser)//get user by id
app.get('/api/users', middleware.addId, userCtrl.addUser)//using middleware to add a new user
app.put('/api/users/:id',userCtrl.updateUser) //update a user
app.delete('/api/users/:id', userCtrl.deleteUser)// delete a user

app.listen(PORT, () => console.log(`${PORT} is always listening`))