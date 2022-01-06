
const Sequelize = require('sequelize');
const fs = require('fs');
//go to this AWS page to download ssl certs for heroku deployment ssl:
  //https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html
  //place cert in same folder as this conn file

let conn = '';

if(process.env.DATABASE_URL) {
    conn = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
            ssl: {  
              require: true,
              ca: fs.readFileSync(`${__dirname}/us-east-1-bundle.pem`)
            }
        }
    })
} else {
        conn = new Sequelize('postgres://postgres:Bigman<26@localhost:5432/acme-movies')
}

    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // }
// )

module.exports = conn;