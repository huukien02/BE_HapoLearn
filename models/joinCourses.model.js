const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const JoinSchema = new Schema({
    username: { type: String },
    nameCourses: { type: String },
    imgCourses: { type: String },
    idCourses: { type: String }

}, { collection: 'JoinCourses' });

module.exports = mongoose.model('JoinCourses', JoinSchema);



