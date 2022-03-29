//mongod --ipv6

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mysecrets', {
    useNewUrlParser: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));