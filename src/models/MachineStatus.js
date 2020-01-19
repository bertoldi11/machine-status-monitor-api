module.exports = (sequelize, DataTypes) => {
  const MachineStatus = sequelize.define('MachineStatus', {
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: 'Status',
       key: 'id'
      }
    },
    id_machine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: 'Machine',
       key: 'id'
      }
    }
  }, { tableName: 'machine_status' });
  return MachineStatus;
}
