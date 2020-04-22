const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
})

const User = mongoose.model('User', UserSchema)
module.exports = User