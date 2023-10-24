const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dni: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["profesor","estudiante"],
    },
    enrolledCourses: [{
        //type: mongoose.Schema.Types.ObjectID,
        type: String,
        required: true,
        //ref: "Course",
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
