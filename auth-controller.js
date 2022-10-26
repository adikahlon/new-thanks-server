const { createUser, getUserByUsernameAndPassword } = require("./auth-service");

function login(req, res) {
const {username, password} = req.body;
const user = getUserByUsernameAndPassword(username, password);
if(user) {
res.send({username: user.username, id: user.id});
}
}

function register(req, res) {
   try {
    const newUser = createUser(req.body);
    res.send(newUser);
   } catch (err) {
res.status(400).send({message: err.message});
   }
}
module.exports = {
    login,
    register
}