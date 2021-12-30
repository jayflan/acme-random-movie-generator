const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const { Movie } = require('./db').models;

//middleware
app.use(morgan('dev'));

// app.use(express.json);  <==don't run on until react is up or page won't load

//paths
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/dist', express.static(path.join(__dirname, '..','dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'client','index.html')));

// app.use('/api', require('./api')); //<--not working, switched api test/views into app.js
  //found this in websocket workshop, isn't working there either?
//api test views
app.get('/api', async(req, res, next) => {
  try {
    res.send(await Movie.findAll());
  }
  catch(err) {
    next(err)
  }
})

//error handling
app.use((req, res, next) => {
  const error = Error('Page not found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
