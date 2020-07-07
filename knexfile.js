// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "cluckr",
      // username: 'your postgres username'
      // password: 'your username password'
    },
    migrations: {
      tablename: "migrations",
      directory: "./db/migrations",
    },

    seeds: {
      directory: "./db/seeds",
    },
  },
};
