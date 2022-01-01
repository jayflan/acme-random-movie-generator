const app = require('./app');
const db = require('./db');
const PORT = process.env.PORT || 3000;


const init = async() => {
  await db.syncAndSeed();
  app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));
};

init();