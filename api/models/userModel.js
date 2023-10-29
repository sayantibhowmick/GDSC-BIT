const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const JWT = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    googleId: String,
    linkedinId: String,
    authType: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    avatar: {
        public_id: String,
        url: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    }
});

UserSchema.methods.comparePassword = async function (enteredPasssword) {
    return bcrypt.compare(enteredPasssword, this.password);
};

const User = mongoose.model('User', UserSchema)
module.exports = User