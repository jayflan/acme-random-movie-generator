const Sequelize = require('sequelize');

let conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:Bigman<26@localhost:5432/acme-movies', {
    dialectOptions: {
        ssl: {
          require: true,
          ca: fs.readFileSync(`${__dirname}/us-east-1-bundle.pem`)
        }
      }

    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // }
})

module.exports = conn;