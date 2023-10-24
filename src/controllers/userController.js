const User = require('../models/User');
const bcrypt = require('bcrypt');
const Course = require('../models/Courses');

async function registerUser(req, res) {
    try {
        const { name, dni, email, password, role, enrolledCourses} = req.body;
        const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'El usuario ya está registrado.' });
            }
        if (!Array.isArray(enrolledCourses)){
            return res.status(400).json({error:"enrolledCourses debe ser un array"});
        }
        const existingCourses = await Course.find({name: {$in: enrolledCourses}});
        const existingCoursesNames = existingCourses.map(course => course.name);

        const invalidCourses = enrolledCourses.filter(course => !existingCoursesNames.includes(course));
        if (invalidCourses.lenght > 0){
            return res.status(400).json({ error: `Los siguientes cursos no existen: ${invalidCourses.join(', ')}` });
        }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        dni,
        email,
        password: hashedPassword,
        role,
        enrolledCourses: enrolledCourses,
    });
    await user.save();
        return res.status(201).json({ message: 'Usuario registrado correctamente.' });
    } catch (error) {
    console.error(error);
        return res.status(500).json({ error: 'Error al registrar el usuario.' });
    }
}
async function getAllUsers(req, res) {
    try {
        const users = await User.find({}, 'name dni email role enrolledCourses'); 
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener la lista de usuarios.' });
    }
}

module.exports = {
    registerUser,
    getAllUsers,
};
