'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      isDone: {
        type: DataTypes.BOOLEAN,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      version: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'task',
      underscored: true,
    },
  );
  return Task;
};
