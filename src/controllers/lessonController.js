const lessons = [];

function getAllLessons(req, res) {
    return res.status(200).json(lessons); 
}
function createLesson(req, res) {
    const { name, description } = req.body;
    if (!name || !description){
    return res.status(400).json({error:"El nombre y descripcion de la leccion son obligatorias"});
    }

    const newLesson = {
    id: lessons.length + 1,
    name: name,
    description: description,
    };

    lessons.push(newLesson);

    return res.status(201).json(newLesson);
}

function updateLesson(req, res) {
    const lessonId = req.params.id;
	const {name, description} = req.body;	
	const lessonIndex = lessons.findIndex(lessons => lessons.id === parseInt(lessonId));	
	if (lessonIndex === -1) {
    return res.status(404).json({error: "Leccion no encontrada, revise el ID"});
	}
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

module.exports = {
    getAllLessons,
    createLesson,
    updateLesson,
    deleteLesson,
};
