const conn = require('./conn')
const Movie = require('./Movie');
const faker = require('faker');

const syncAndSeed = async() => {
  await conn.sync({ force: true });

  await Movie.create({
    movieName: faker.company.catchPhrase(),
    star: 3
  });

  await Movie.create({
    movieName: faker.company.catchPhrase(),
    star: 1
  });

  await Movie.create({
    movieName: faker.company.catchPhrase(),
    star: 5
  });

};

module.exports = {
  syncAndSeed,
  models: {
    Movie
  }
};