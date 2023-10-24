# README

## HOW TO USE 

1. Download and Install Node.js:
    - Go to the Node.js oficial website https://nodejs.org/.
    - Follow the instructions of the installer the user's operating system.
2. Verify the installation:
    - Open the terminal and run
        - node -v
        - npm -v
3. We go to the root folder of the project and initialize from the terminal with the following commands:
    1. “npm install”
    2. “node src/server.js “
        - You should see the following message “Server is running on port 3000”
4. We turn to Postman, ThunderClient or our favorite tool to perform Endpoint requests and testing.
   
<---------------------------------------------------------------------------------------------------------------------------->

## VERBOS HTTP 

- Courses
    - GET http://localhost:3000/api/courses = To get a list of all the courses
    - POST http://localhost:3000/api/courses =  To insert a course
    - PUT http://localhost:3000/api/courses/{id} = To modify a course
    - DELETE http://localhost:3000/api/courses/{id} = Delete a course
      
- Users
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)users = To get a list of all the users
    - POST [http://localhost:3000/api/](http://localhost:3000/api/courses)users/register = To register a new user
    - PUT [http://localhost:3000/api/](http://localhost:3000/api/courses)users/{id} = To modify a user
    - DELETE [http://localhost:3000/api/](http://localhost:3000/api/courses)users/{id} = To delete a user
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)users/{email} = To access a user's information, for example: The courses he/she can access.
      
- Lessons
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons = To get all lessons
    - POST [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons =  To create a new lesson
    - PUT [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/{id} = To modify a lesson
    - DELETE [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/{id} = To delete a lesson
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/{name} =  To get all lessons and users related to a course (For example, we want to find all users and lessons of the course Mathematics ⇒ http://localhost:3000/api/lessons/Matematicas )

- Questions
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)questions = To get all the questions
    - POST [http://localhost:3000/api/](http://localhost:3000/api/courses)questions = To create a question
    - PUT [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/{id} = To modify a question
    - DELETE [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/{id} = To delete a question
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/{name} = To search all questions related to a lesson (For example we want to search all questions of "Lesson I" ⇒ http://localhost:3000/api/questions/Leccion I )
<---------------------------------------------------------------------------------------------------------------------------->

##  Points to keep in mind

1. There is a file called postman.txt where there are simple examples for the posts, to save the JSON writing at the time of the tests.
2. This API was made with NodeJS 14.4.0 and NPM 6.14.5.
3. It is NOT suitable for production environment. It is thought as "Development", since it does not contain database. In case you want to put a database I recommend MongoDB using Mongoose.
4. I was making the database in Mongo and the connections, but I didn't have the time because of my work. Sorry, team
5. I tried to keep the development simple. Keep it simple.
