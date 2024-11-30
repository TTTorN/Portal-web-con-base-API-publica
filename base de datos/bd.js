//para conectar la base de datos al front
const mysql = require("mysql2");
const connection =
mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'AICPropiedades'
});

connection.connect((err) => {
    if (err) {
        console.error('Error concetando con la base de datos: ', err.message);
        return;        
    }
    console.log('Conectado a la base de datos');
});

module.exports = connection;
