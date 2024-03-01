'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Timer.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      timerTypeId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      taskId: {
        type: DataTypes.UUID,
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
      modelName: 'timer',
      tableName: 'timer',
      sequelize,
      underscored: true,
    },
  );
  return Timer;
};
