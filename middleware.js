let id = 21

module.exports = {
    addId: (req, res, next) => {
        if(req.body.first_name){
            req.body.id = id
            id++
        }
        next()
    }
}