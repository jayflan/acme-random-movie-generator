const router = require('express').Router();
const { Movie } = require('../db').models;
const faker = require('faker');

router.get('/', async(req, res, next) => {
  try {
    const movies = await Movie.findAll({
      order: [
        ['star', 'DESC'],
        ['movieName', 'ASC']
      ]
    });
    res.send(movies);
  }
  catch(ex) {
    console.log(ex);
    next(ex);
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

router.put('/:id', async(req, res, next) => {
  try {
    const stars = await Movie.findByPk(req.params.id);
    await stars.update(req.body);
    res.send(stars);
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

