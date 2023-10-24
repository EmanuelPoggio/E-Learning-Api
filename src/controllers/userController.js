const User = require('../models/User');
const bcrypt = require('bcrypt');

async function registerUser(req, res) {
    try {
        const { name, email, password, profession} = req.body;
        const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'El usuario ya está registrado.' });
            }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        profession,
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
        const users = await User.find({}, 'name email profession'); 
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
