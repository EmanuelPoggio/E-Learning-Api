# README

## HOW TO USE 

1. Descargamos e Instalamos Node.js:
    - Ve al sitio web oficial de Node.js en https://nodejs.org/.
    - Sigue las instrucciones del instalador el sistema operativo del usuario.
2. Verificamos la Instalación:
    - Abre la terminal y ejecuta
        - node -v
        - npm -v
3. Nos dirigimos a la carpeta raiz del proyecto e inicialice desde la terminal con los siguientes comandos:
    1. “npm install”
    2. “node src/server.js “
        - Debera aparecer el siguiente mensaje “Server is running on port 3000”
4. Nos dirigimos a Postman, ThunderClient o nuestra herramienta favorita para realizar las peticiones y pruebas de Endpoints.
   
<---------------------------------------------------------------------------------------------------------------------------->

## VERBOS HTTP 

- Courses
    - GET http://localhost:3000/api/courses = Para obtener un listado de todos los cursos
    - POST http://localhost:3000/api/courses = Para insertar un curso
    - PUT http://localhost:3000/api/courses/{id} = Para modificar un curso
    - DELETE http://localhost:3000/api/courses/{id} = Para eliminar un curso
      
- Users
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)users = Para obtener un listado de todos los usuarios
    - POST [http://localhost:3000/api/](http://localhost:3000/api/courses)users/register = Para registrar un usuario nuevo
    - PUT [http://localhost:3000/api/](http://localhost:3000/api/courses)users/{id} = Para modificar un usuario
    - DELETE [http://localhost:3000/api/](http://localhost:3000/api/courses)users/{id} = Para eliminar un usuario
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)users/{email} = Para acceder a la informacion de un usuario, por ejemplo: Los cursos a los que puede acceder.
      
- Lessons
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons = Para obtener todas las lecciones
    - POST [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons = Para crear una leccion nueva
    - PUT [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/{id} = Para modificar una leccion
    - DELETE [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/{id} = Para eliminar una leccion
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/{name} = Para obtener todos las lecciones y usuarios relacionados a un curso (Por ejemplo, queremos buscar todos los usuarios y lecciones del curso Matematicas ⇒ [http://localhost:3000/api/](http://localhost:3000/api/courses)lessons/Matematicas )

- Questions
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)questions = Para obtener todas las lecciones
    - POST [http://localhost:3000/api/](http://localhost:3000/api/courses)questions = Para crear una pregunta
    - PUT [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/{id} = Para modificar una pregunta
    - DELETE [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/{id} = Para eliminar una pregunta
    - GET [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/{name} = Para buscar todas las preguntas relacionadas con una leccion (Por ejemplo queremos buscar todas las preguntas de “Leccion I” ⇒ [http://localhost:3000/api/](http://localhost:3000/api/courses)questions/Leccion I )
      
<---------------------------------------------------------------------------------------------------------------------------->

## Puntos a tener en cuenta

1. Hay un archivo llamado postman.txt donde hay ejemplo simples para los post, para ahorrarse la escritura del JSON a la hora de las pruebas.
2. Esta API se realizo con NodeJS 14.4.0 y NPM 6.14.5
3. NO es apta para entorno productivo. Esta pensado como “Desarrollo”, ya que no contiene base de datos. En caso de querer colocarle una base de datos recomiendo MongoDB utilizando Mongoose
4. Estaba haciendo la BBDD en Mongo y las conexiones, pero no llegue con el tiempo por mi trabajo. Lo siento, equipo 
5. Se busco mantener el desarrollo simple. Keep it simple.
