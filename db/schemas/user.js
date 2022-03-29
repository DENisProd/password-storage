const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    username: String,
    isConfirmed: {
        type: Boolean,
        default: false
    },
    confirmHash: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ""
    },
    created: {
        type: Date,
        default: Date.now
    },
    enter_history: [
        {
            user_agent: {
                type: String,
                default: ''
            },
            ip_address: {
                type: String,
                default: ''
            },
            country: {
                type: String,
                default: ''
            }
        }
    ]
})

const User = mongoose.model('user', userSchema)

module.exports = User