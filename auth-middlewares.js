const { getUserById } = require("./auth-service");

function verifyUser(req, res, next) {
    const UserId = req.headers['UserId'];
    const user = getUserById(UserId);

if(!user) {
    res.status(401).send({message: 'you are not authorized'})
}
req.user = user;
next();
}
module.exports = {verifyUser}