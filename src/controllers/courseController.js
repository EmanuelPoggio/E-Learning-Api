const courses = [];
let availableCourses = ["Logica"]; //se declara el array con un valor, sino se rompe al hacer .push

function getAllCourses(req, res) {
    return res.status(200).json(courses); 
}
function createCourse(req, res) {
    const { name, description, lessons} = req.body;
    if (!name || !description){
    return res.status(400).json({error:"El nombre y descripcion del curso son obligatorios"});
    }

    const newCourse = {
    id: lessons.length + 1,
    name: name,
    description: description,
	lessons: lessons,
    };

    courses.push(newCourse);
	availableCourses.push(name);


    return res.status(201).json(newCourse);
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
function getCourseByName(req, res) {
    const  { name }  = req.params;
    const course = courses.find(course => course.name === name);
    if (!course) {
        return res.status(404).json({ error: 'Curso no encontrado. Verifique el nombre ingresado o verifique si el curso existe' });
    }

    return res.status(200).json(course);
    }
module.exports = {
	courses,
	availableCourses,
	getAllCourses,
	createCourse,
	updateCourse,
	deleteCourse,
	getCourseByName,
};
