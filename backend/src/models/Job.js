const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Job = db.define("job", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  new_job: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Job;
