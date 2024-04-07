const mongoose = require('mongoose');
const db = require('mongodb')
const {Schema , model} = mongoose;

const UserSchema = new Schema ({
    username : {type: String},
    password : {type: String}
});

const UserModel = mongoose.model('Usersss', UserSchema );
module.exports = UserModel;