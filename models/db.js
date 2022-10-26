const mongoose = require ('mongoose');

require('./Todo')

async function connect() {
    try{
     await mongoose.connect('mongodb://localhost/my_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log('connected to db');
    }
    catch (err) {
        console.log('could not connect');
        console.log(err);
    }
}

module.exports = {connect}