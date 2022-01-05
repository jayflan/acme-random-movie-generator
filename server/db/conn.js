const Sequelize = require('sequelize');

let conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:Bigman<26@localhost:5432/acme-movies');


module.exports = conn;