const users = [];
const bcrypt = require('bcrypt');
const { availableCourses } = require('./courseController');

async function registerUser(req, res) {
    const {name, dni, email, password, role, enrolledCourses} = req.body;
    if (!name || !email){
    return res.status(400).json({error:"User name and email are required"});
    }

    const invalidCourses = enrolledCourses.filter(course => !availableCourses.includes(course));
    if (invalidCourses.length > 0) {
        return res.status(400).json({ error: 'The following courses do not exist: ' + invalidCourses.join(', ') });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
    id: users.length + 1,
    name,
    dni,
    email,
    password: hashedPassword,
    role,
    enrolledCourses: enrolledCourses,
    };

    users.push(newUser);

    return res.status(201).json(newUser);
}
function getAllUsers(req, res) {
    return res.status(200).json(users); 
}
function updateUser(req, res) {
	const userId = req.params.id;
	const {name, dni, email, password, role, enrolledCourses} = req.body;	
	const userIndex = users.findIndex(user => user.id === parseInt(userId));	
    if (userIndex === -1) {
        return res.status(404).json({error: "User not found, check ID"});
	}

    const invalidCourses = enrolledCourses.filter(course => !availableCourses.includes(course));
    if (invalidCourses.length > 0) {
        return res.status(400).json({ error: 'The following courses do not exist: ' + invalidCourses.join(', ') });
    }

	users[userIndex].name = name;
	users[userIndex].dni = dni;
	users[userIndex].email = email;
    users[userIndex].password = password;
    users[userIndex].role = role;
    users[userIndex].enrolledCourses = enrolledCourses;

	return res.status(200).json(users[userIndex]);

}
function deleteUser(req, res) {
	const userId = req.params.id;
	const userIndex = users.findIndex(user => user.id === parseInt(userId));

	if (userIndex === -1) {
    return res.status(404).json({error:"User not found, please check the ID"});
	}
	const deletedUser = users.splice(userIndex,1)[0];
	return res.status(200).json({message: "User successfully deleted", user: deletedUser});
}
function getUserById(req, res) {
    const  { email }  = req.params;
    //const userEmail = parseInt(id);
    const user = users.find(user => user.email === email);
    

    if (!user) {
        return res.status(404).json({ error: 'User not found. Verify the entered email or check if the user exists' });
    }

    return res.status(200).json(user);
    }
module.exports = {
    users,
    registerUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUserById,
};
