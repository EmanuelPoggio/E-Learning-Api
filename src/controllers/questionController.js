const questions = [];
const { availableLessons } = require('./lessonController');


function getAllQuestions(req, res) {
    return res.status(200).json(questions); 
}
function createQuestion(req, res) {
    const { relatedLesson, question, answer } = req.body;

    const invalidLesson = relatedLesson.filter(lesson => !availableLessons.includes(lesson));
    if (invalidLesson.length > 0) {
        return res.status(400).json({ error: 'Las siguientes lecciones no existen: ' + invalidLesson.join(', ') });
    }

    const newQuestion = {
        id: questions.length + 1,
        relatedLesson: relatedLesson,
        question: question,
        answer: answer,
        };

    questions.push(newQuestion);

    return res.status(201).json(newQuestion);
}
function updateQuestion(req, res) {
    const questionId = req.params.id;
	const {relatedLesson, question, answer} = req.body;	
	const questionIndex = questions.findIndex(question => question.id === parseInt(questionId));

    const invalidLesson = relatedLesson.filter(lesson => !availableLessons.includes(lesson));
    if (invalidLesson.length > 0) {
        return res.status(400).json({ error: 'Las siguientes lecciones no existen: ' + invalidLesson.join(', ') });
    }

	if (questionIndex === -1) {
    return res.status(404).json({error: "Pregunta no encontrada, revise el ID"});
	}

    questions[questionIndex].relatedLesson = relatedLesson;
	questions[questionIndex].question = question;
	questions[questionIndex].answer = answer;

	return res.status(200).json(questions[questionIndex]);
}
function deleteQuestion(req, res) {
    const questionId = req.params.id;
    const questionIndex = questions.findIndex(question => question.id === parseInt(questionId));

    if (questionIndex === -1) {
        return res.status(404).json({error: "Pregunta no encontrada, por favor,revise el ID"});
    }
    const deletedQuestion = questions.splice(questionIndex,1)[0];
    return res.status(200).json({message: "Pregunta eliminada correctamente", question: deleteQuestion})
}
function getQuestionsByLesson(req, res){
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
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
};
