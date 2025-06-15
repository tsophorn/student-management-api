const { Sequelize } = require("sequelize");
const config = require("../config/config");

const {database, username, password, host, port, dialect}= config.development;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
  logging: false,
});

const DataTypes = Sequelize.DataTypes;

const Users = require("./users")(sequelize, DataTypes);
const Students = require("./students")(sequelize, DataTypes);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users = Users;
db.Students = Students;

module.exports = db;
