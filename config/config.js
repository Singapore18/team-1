module.exports = {
    development: {
      username: "root",
      password: "",
      database: "cfg",
      host: "localhost",
      dialect: "mysql"
    },
    test: {
      username: "root",
      password: null,
      database: "cfg",
      host: "localhost",
      dialect: "mysql"
    },
    production: {
      username: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      host: process.env.SQL_HOSTNAME,
      dialect: "mysql",
      dialectOptions: {
        socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
      }
    }
  };
  