module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
  }, { tableName: 'status' });

  return Status;
}
