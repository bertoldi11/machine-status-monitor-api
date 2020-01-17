module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define('Machine', {
    name: DataTypes.STRING,
  }, { tableName: 'machine' });
//  Machines.associate = function(models) {
//    Post.hasMany(models.Comment, {
//      foreignKey: 'postId',
//      as: 'comments',
//      onDelete: 'CASCADE',
//    });
//  };
  return Machine;
}
