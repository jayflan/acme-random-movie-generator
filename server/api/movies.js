const router = require('express').Router();
const { Movie } = require('../db').models;
const faker = require('faker');

router.get('/', async(req, res, next) => {
  try {
    res.send(await Movie.findAll());
  }
  catch(err) {
    next(err)
  }
});

router.post('/', async(req, res, next) =>{
  try{
    const movie = await Movie.create({
      movieName: faker.company.catchPhrase(),
      star: 3
    })
    res.status(201).send(movie);
  }
  catch(err) {
    next(err);
  }
});

router.delete('/:id', async(req, res, next) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    await movie.destroy();
    res.send(movie);
  }
  catch(err) {
    next(err);
  }
});

module.exports = router;

