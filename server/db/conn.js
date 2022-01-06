const Sequelize = require('sequelize');

let conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:Bigman<26@localhost:5432/acme-movies')

conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = conn;