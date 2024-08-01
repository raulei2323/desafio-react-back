Api para reto React modificada segun las necesidades encontradas al conectar la api con el front end

POST /users para registrar un usuario nuevo, mandar en el body de la peticion el esquema necesario con los datos requeridos minimos(ver userSignUpexample.txt que se encuentra en la carpeta raiz del proyecto)

POST /auth/login Para iniciar sesion mandar en el body de la peticion en formato .json el email y la contrasena de un usuario previamente creado, en la respuesta retornara un token que nos servira para realizar algunas diferentes operaciones dentro de la API

POST /post para crear un post sera necesario mandar en el body de la peticion un .json cde la siguiente forma
{
    "content": "your post content"
}
con el token que nos dio el inicio de sesion en el header Authorization.....

GET /post para obtener todos los post que existan en la base de datos
