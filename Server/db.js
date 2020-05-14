const { Client } = require("pg");
require('dotenv').config()


const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT
})

client.connect()
// console.log(client.user, client.host, client.database, client.password, client.port)

module.exports = client