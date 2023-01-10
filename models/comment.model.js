const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({

    user: { type: String },
    idUser: { type: String },
    idCourses: { type: String },
    cmt: { type: String },
    today: { type: String },
    star: { type: Number }

}, { collection: 'comment' });

module.exports = mongoose.model('comment', commentSchema);


