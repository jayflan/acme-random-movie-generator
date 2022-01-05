const conn = require('./db/conn')
const app = require('./app');
const { syncAndSeed } = require('./db/index')
const PORT = process.env.PORT || 3000;

const init = async() => {
  await syncAndSeed();
  app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));
};



init();



