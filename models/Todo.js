
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    done: DataTypes.Boolean
  });

  return Task;
};