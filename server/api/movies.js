const router = require('express').Router();
const { Movie } = require('../db').models;

router.get('/', async(req, res, next) => {
  try {
    res.send(await Movie.findAll());
  }
  catch(err) {
    next(err)
  }
})

module.exports = router;

