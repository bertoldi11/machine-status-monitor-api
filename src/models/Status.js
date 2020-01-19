module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
  }, { tableName: 'status' });

  Status.associate = (models) => {
    Status.belongsToMany(models.Machine, {
      through: 'MachineStatus',
      as: 'machines',
      foreignKey: 'id_status',
      otherKey: 'id_machine'
    });
  };

  return Status;
}
