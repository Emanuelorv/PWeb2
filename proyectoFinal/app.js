// Importación de módulos necesarios
const express = require('express'); // Llamada a Express
const mysql = require('mysql2'); // Llamada a MySQL
const bodyParser = require('body-parser'); // Middleware para analizar el cuerpo de las solicitudes

// Crear una instancia de Express
const app = express(); 
// Definir el puerto del servidor
const port = 3008;
const hostName='127.0.0.1'
// Middleware para analizar los datos del cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración del motor de plantillas para generar HTML dinámico
app.set('view engine', 'ejs');

// Configuración de las credenciales para la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '101537',
    database: 'node_crud',
    port: '3306'
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
        console.log(`Error al momento de hacer conexión con la DB: ${err}`);
    } else {
        console.log("Conexión realizada con éxito");
    }
});

// Inicio del servidor
app.listen(port, hostName,() => {
    console.log(`El servidor está en escucha en http://${hostName}:${port}`);
});

//Mostrar lista de Usuarios
app.get('/',(req,res)=>{
    //consulta a la bd
    const query = 'SELECT * FROM users';
    //trabajar con la conexión
    db.query(query,(err,result)=>{
        if (err){
            //mensaje error para el usuario
            console.log(`Error al recuperar datos -> Codigo de error ${err}`) //para el desarrollador
            res.send("Error en recuperar datos"); //para el usuario
        } else {
            res.render('index',{users: result}); //render manda info por la plantilla de html con el js para trabajar con manera dinamica
        }
    });
});

//agregar un usuario
app.post('/add',(req,res)=>{ //CUANDO SE MANDA ALGO SE EJECUTA al usuario
    const {name, email} = req.body;
    const query = 'INSERT INTO users (name,email)VALUE(?,?)';
    db.query(query,[name,email],(err)=>{
        if(err){
            console.error(`Error al instertar usuarios: Código ${err}`)
            res.send(`Error`)
        } else{
            res.redirect('/');
        }
    });
});

// Ruta para mostrar el formulario de agregar usuario
app.get('/add', (req, res) => {
    res.render('add');
});

//editar usuario

app.get('/edit/:id',(req,res)=>{
    const {id} = req.params; 
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query,[id],(err,results)=>{
        if(err){
            console.error('Error en la db');
            res.send('Error en la DB');
        } else{
            res.render('edit',{user:results[0]})
        }
    });
});

app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.send('Error al actualizar');
        } else {
            res.redirect('/');
        }
    });
});


//Eliminar usuario

app.get('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const query = 'DELETE FROM users WHERE id=?';
    db.query(query,[id],(err)=>{
        if(err){
            console.error("Error en el DELETE");
            res.send("Error al eliminar")
        } else {
            res.redirect('/');
        }
    });
});

app.use(express.static('public'));
