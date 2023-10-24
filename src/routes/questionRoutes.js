const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

router.get('/', questionController.getAllQuestions);
router.post('/', questionController.createQuestion);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);
router.get('/:name', questionController.getQuestionsByLesson);

module.exports = router;
