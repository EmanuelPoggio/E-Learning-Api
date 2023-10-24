const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    unique: true,
    },
description: {
    type: String,
    required: true,
    },
lessons: {
    type: String,
    required: true,
    },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
