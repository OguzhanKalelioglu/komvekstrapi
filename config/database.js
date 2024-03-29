
/* SQL Lite Connection */
/*
const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
*/


/* PostgreSQL Connection */


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', '123123123'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      /*ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', true), // For self-signed certificates
      }, */
      rejectUnauthorized: false
    },
    debug: false,
  },
}); 


 

 
