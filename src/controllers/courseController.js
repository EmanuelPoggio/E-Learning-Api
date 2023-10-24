const courses = [];
let availableCourses = [" "]; 

function getAllCourses(req, res) {
    return res.status(200).json(courses); 
}
function createCourse(req, res) {
    const { name, description, lessons} = req.body;
    if (!name || !description){
    return res.status(400).json({error:"The name and description of the course are required"});
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
    return res.status(404).json({error: "Course not found, check ID"});
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
    return res.status(404).json({error:"Course not found, please check the course ID"});
	}
	const deletedCourse = courses.splice(courseIndex,1)[0];
	return res.status(200).json({message: "Course succesdsfully delete", course: deletedCourse});
}
function getCourseByName(req, res) {
    const  { name }  = req.params;
    const course = courses.find(course => course.name === name);
    if (!course) {
        return res.status(404).json({ error: 'Course not found. Verify the name entered or check if the course exists.' });
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
