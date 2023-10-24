const questions = [];

function getAllQuestions(req, res) {
    return res.status(200).json(questions); 
}
function createQuestion(req, res) {
    const { name, description } = req.body;

    if (!name || !description){
        return res.status(400).json({error:"El nombre y descripcion de la pregunta son obligatorios"});
    }
    const newQuestion = {
        id: questions.length + 1,
        name: name,
        description: description,
        };

    questions.push(newQuestion);

    return res.status(201).json(newQuestion);
}

function updateQuestion(req, res) {
    const questionId = req.params.id;
	const {name, description} = req.body;	
	const questionIndex = questions.findIndex(question => question.id === parseInt(questionId));	
	if (questionIndex === -1) {
    return res.status(404).json({error: "Pregunta no encontrada, revise el ID"});
	}
	questions[questionIndex].name = name;
	questions[questionIndex].description = description;

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

module.exports = {
    getAllQuestions,
    createQuestion,
    updateQuestion,
    deleteQuestion,
};
