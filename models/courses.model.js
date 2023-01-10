const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CoursesSchema = new Schema({
    img: { type: String },
    name: { type: String },
    title: { type: String },
    lessons: { type: Array },
    teacher: { type: Array },
    review: { type: Array }

}, { collection: 'ALL_Courses' });

module.exports = mongoose.model('ALL_Courses', CoursesSchema);

