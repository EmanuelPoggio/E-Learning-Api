const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getAllCourses);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);
//router.get('/:name', courseController.getCourseByName);
//router.get('/:name', courseController.getLessonsWithCourseAndUsers);


module.exports = router;
