
module.exports = {
  APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
  dbHost: process.env.DB_HOST ? process.env.DB_HOST : '127.0.0.1',
  dbPort: process.env.DB_PORT ? process.env.DB_PORT : 5432,
  dbUser: process.env.DB_USER ? process.env.DB_USER : 'postgres',
  dbPass: process.env.DB_PASS ? process.env.DB_PASS : 'password',
  dbName: process.env.DB_NAME ? process.env.DB_NAME : 'servian'
};
