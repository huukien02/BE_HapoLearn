const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
    name: { type: String },
    phone: { type: String },
    date: { type: String },
    address: { type: String },
    about: { type: String }

}, { collection: 'USERS' });

module.exports = mongoose.model('USERS', userSchema);



