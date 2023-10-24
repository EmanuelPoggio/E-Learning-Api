const lessons = [];
let availableLessons = ["Leccion I"]; 
const { availableCourses } = require('./courseController');
const { users } = require('./userController');
const { courses }  = require('./courseController');

function getAllLessons(req, res) {
    return res.status(200).json(lessons); 
}
function createLesson(req, res) {
    const {relatedCourse, name, description} = req.body;
    if (!name || !description){
    return res.status(400).json({error:"El nombre y descripcion de la leccion son obligatorias"});
    }

    const invalidCourses = relatedCourse.filter(course => !availableCourses.includes(course));
    if (invalidCourses.length > 0) {
        return res.status(400).json({ error: 'Los siguientes cursos no existen: ' + invalidCourses.join(', ') });
    }

    const newLesson = {
    id: lessons.length + 1,
    relatedCourse: relatedCourse,
    name: name,
    description: description,
    };

    lessons.push(newLesson);

    return res.status(201).json(newLesson);
}
function updateLesson(req, res) {
    const lessonId = req.params.id;
	const {relatedCourse, name, description} = req.body;	
	const lessonIndex = lessons.findIndex(lessons => lessons.id === parseInt(lessonId));	
	if (lessonIndex === -1) {
    return res.status(404).json({error: "Leccion no encontrada, revise el ID"});
	}

    const invalidCourses = relatedCourse.filter(course => !availableCourses.includes(course));
    if (invalidCourses.length > 0) {
        return res.status(400).json({ error: 'Los siguientes cursos no existen: ' + invalidCourses.join(', ') });
    }

	lessons[lessonIndex].relatedCourse = relatedCourse;
	lessons[lessonIndex].name = name;
	lessons[lessonIndex].description = description;

	return res.status(200).json(lessons[lessonIndex]);
}
function deleteLesson(req, res) {
    const lessonId = req.params.id;
	const lessonIndex = lessons.findIndex(lesson => lesson.id === parseInt(lessonId));

	if (lessonIndex === -1) {
    return res.status(404).json({error:"Leccion no encontrada, por favor, revise el ID"});
	}
	const deletedLesson = lessons.splice(lessonIndex,1)[0];
	return res.status(200).json({message: "Leccion eliminada correctamente", course: deleteLesson});
}
function getLessonsWithCourseAndUsers(req, res){
    const { name } = req.params;

    const course = courses.find(course => course.name === name);

    if (!course) {
        return res.status(404).json({ error: 'Curso no encontrado' });
    }

    const enrolledUsers = users
    .filter(user => user.enrolledCourses.includes(course.name))
    .map(user => {
        const {id, name, email, role, enrolledCourses} = user;
        return {id, name, email, role, enrolledCourses};
    });

    const relatedLesson = lessons.filter(lesson => lesson.relatedCourse.includes(course.name));
    return res.status(200).json({ course, enrolledUsers, relatedLesson });
}
module.exports = {
    availableLessons,
    lessons,
    getAllLessons,
    createLesson,
    updateLesson,
    deleteLesson,
    getLessonsWithCourseAndUsers,
};
