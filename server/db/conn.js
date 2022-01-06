const Sequelize = require('sequelize');

let conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:Bigman<26@localhost:5432/acme-movies', {
ssl: {
    rejectUnauthorized: false
  }
// {
//   host: 'ec2-34-236-87-247.compute-1.amazonaws.com',
//   dialect: 'postgres',
//   ssl: true,
//   protocol: "postgres",

//   logging: true,
//   dialectOptions: {
//       ssl: {
//           require: true,
//           rejectUnauthorized: false // <<<<<< YOU NEED THIS
//       }
//   }
// }
});

conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = conn;