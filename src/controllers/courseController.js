const courses = [];
const Course = require('../models/Courses');
const User = require('../models/User');

async function getAllCourses(req, res) {
	try {
        const courses = await Course.find({}, 'name description lessons'); 
        return res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener la lista de usuarios.' });
    }
}
async function createCourse(req, res) {
	try {
		const { name, description, lessons} = req.body;
		const existingCourse = await Course.findOne({name});
		
		if(existingCourse){
			return res.status(400).json({error: "Ya existe un curso con este nombre"});
		}
		const newCourse = new Course({
			name,
			description,
			lessons,
		});
		await newCourse.save();
		return res.status(201).json({message: "Curso registrado correctamente"});
	} catch (error){
		console.error(error);
		return res.status(500).json({error: "Error al registrar el curso"});
	}
}

function updateCourse(req, res) {
	const courseId = req.params.id;
	const {name, description, lessons} = req.body;	
	const courseIndex = courses.findIndex(course => course.id === parseInt(courseId));	
	if (courseIndex === -1) {
    return res.status(404).json({error: "Curso no encontrado, revise el ID"});
	}
	courses[courseIndex].name = name;
	courses[courseIndex].description = description;
	courses[courseIndex].lessons = lessons;

	return res.status(200).json(courses[courseIndex]);
}

function deleteCourse(req, res) {
	const courseId = req.params.id;
	const courseIndex = courses.findIndex(course => course.id === parseInt(courseId));

	if (courseIndex === -1) {
    return res.status(404).json({error:"Curso no encontrado, por favor, revise el ID"});
	}
	const deletedCourse = courses.splice(courseIndex,1)[0];
	return res.status(200).json({message: "Curso eliminado correctamente", course: deletedCourse});
}
async function getCoursesForStudent(req,res){
	const email = req.params.email;
	try {
		const usuario = await User.findOne({email: email});
		if (!usuario) {
			return res.status(404).json({error:"Usuario no encontrado"});
		}
		const enrolledCourses = await Course.find({ name: { $in: usuario.enrolledCourses } });
		return res.status(200).json(enrolledCourses);
	} catch (error) {
		console.error(error);
		return res.status(500).json({error:"Error al obtener los cursos del estudiante."});
	}
}
module.exports = {
	getAllCourses,
	createCourse,
	updateCourse,
	deleteCourse,
	getCoursesForStudent,
};
