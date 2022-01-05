const app = require('./app');
const db = require('./db');
const { syncAndSeed } = require('./db/index')
const PORT = process.env.PORT || 3000;

const Sequelize = require('sequelize');

// const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:Bigman<26@localhost:5432/acme-movies');
// module.exports = conn;
const init = async() => {
  await syncAndSeed();
  app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));
};



init();



