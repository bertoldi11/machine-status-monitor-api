const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const dbUser = process.env.DB_USER || 'root'
const dbPassword = process.env.DB_PASSWORD || '123456'
const dbName = process.env.DB_NAME || 'machine-status-monitor'
const dbHost = process.env.DB_HOST || 'localhost'

const db = {};
const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
});

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
      const model = sequelize.import(path.join(__dirname, file));
      db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
