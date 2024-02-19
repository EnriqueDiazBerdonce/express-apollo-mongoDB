const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    password: String
})

module.exports = model('User', userSchema)