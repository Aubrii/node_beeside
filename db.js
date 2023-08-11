const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'beeside'
});
console.log("test")
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données');
});
connection.on('end', () => {
    console.log('Connexion à la base de données fermée');
});
connection.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
  )
`, (error) => {
    if (error) {
        console.error('Erreur lors de la création de la table :', error);
    } else {
        console.log('Table "users" créée avec succès (ou déjà existante)');
    }
});

module.exports = connection;