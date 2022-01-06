const express = require('express');
const app = express();
const path = require('path');


//req body parsing middleware is important for updating!!!!!!
app.use(express.json()); // Remember!!!: Don't forget ()!!!!

//paths
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/dist', express.static(path.join(__dirname, '..','dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'client','index.html')));

app.use('/api', require('./api'));
  
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
