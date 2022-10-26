const express = require('express');
const {connect} = require('./db');
const app = express();
const {loadRoutes} = require("./routes");
app.use(express.json());
loadRoutes(app);
connect().then(() => app.listen(3000, () => console.log('app is running'))).catch();