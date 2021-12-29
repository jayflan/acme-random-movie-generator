const Sequelize = require('sequelize');
const { STRING, INTEGER } = Sequelize;
const conn = require('./conn');

const Movie = conn.define('movies', {
  movieName: {
    type: STRING,
    allowNull: false
  },
  star: {
    type: INTEGER,
    allowNull: false
  }
});

module.exports = Movie;