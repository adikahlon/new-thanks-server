const {login, register} = require('../new-thaks-server/auth-controller');
module.exports = function loadRoutes(app) {
app.post('/api/login', login);

app.post('/api/register', register);
}