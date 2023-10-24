const courses = [];

function getAllCourses(req, res) {
	return res.status(200).json(courses); 
}

function createCourse(req, res) {
	const { name, description } = req.body;

if (!name || !description){
    return res.status(400).json({error:"El nombre y descripcion del curso son obligatorios"});
}

	const newCourse = {
    id: courses.length + 1,
    name: name,
    description: description,
    lessons: []
	};

	courses.push(newCourse);

	return res.status(201).json(newCourse);
}

function updateCourse(req, res) {
	const courseId = req.params.id;
	const {name, description} = req.body;	
	const courseIndex = courses.findIndex(course => course.id === parseInt(courseId));	
	if (courseIndex === -1) {
    return res.status(404).json({error: "Curso no encontrado, revise el ID"});
	}
	courses[courseIndex].name = name;
	courses[courseIndex].description = description;

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

module.exports = {
	getAllCourses,
	createCourse,
	updateCourse,
	deleteCourse,
};
