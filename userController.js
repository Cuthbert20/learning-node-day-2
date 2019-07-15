const users = require('./userData')

module.exports = {
    getAllUsers: (`/api/user`, (req,res) => {
        //console.log(users)                         going to come back as a string use + to convert to a number
        const user = users.filter(obj => obj.id === +req.query.id)
        res.status(200).send(user)
    }),
    getOneUser: (`/api/users`, (req,res) => {
        console.log(req.query)
        //deconstrcting id from req.query
        let {id} = req.query//so we could use id and get the id of the user
        res.status(200).send(users)
    }),
    addUser: ('/api/users', (req, res) => {
        //console.log(req.body)
        users.push(req.body)
        res.status(201).send(users)
    }),
    updateUser: (req,res) => {
        console.log(req.params, req.body)
        const {id} = req.params

        const user = users.filter(obj => obj.id === +id)//return an array
        const index = users.findIndex(user => user.id === +id)

        //if the user array is empty, return an error
        if (!user.length === 1) {
            return res.status(409).send("no user with that id found")
        }
        req.body.id = user[0].id
        //update user object with modified data
        user[0] = req.body
        
        //replace user object in array with moified user object (user[0])
        users.splice(index, 1, user[0])

        //send updated users array
        res.status(200).send(users)
    },
    deleteUser: (req, res) => {
        const {id} = req.params
        console.log(id)
        const index = users.findIndex(user => user.id === +id)
        if(index === -1){
            return res.status(418).send("User Not found")
        }
        const deletedUser = users.splice(index, 1)
        res.status(200).send(deletedUser)
    }
}
