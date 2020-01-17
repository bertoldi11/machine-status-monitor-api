const Sequelize = require('sequelize')

const sequelize = 
  new Sequelize('machine-status-monitor', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

exports.default = sequelize
