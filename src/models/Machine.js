module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define('Machine', {
    name: DataTypes.STRING,
  }, { tableName: 'machine' });

  Machine.associate = (models) => {
    Machine.belongsToMany(models.Status, {
      through: 'MachineStatus',
        as: 'status',
        foreignKey: 'id_machine',
        otherKey: 'id_status'
    });
  };
  return Machine;
}
