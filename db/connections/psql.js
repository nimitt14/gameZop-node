const {postgres:dbConfig} = require("../config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.URL, {
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;