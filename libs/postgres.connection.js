const { Client } = require('pg')

async function getConnection() {

  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'oscar',
    password: 'admin123',
    database: 'challenge'
  })

  await client.connect()

  return client
}


module.exports = getConnection
