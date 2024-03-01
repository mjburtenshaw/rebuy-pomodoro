'use strict';
const { Model, UUIDV4 } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StorageObject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StorageObject.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        comment: 'Internal only. Do NOT expose this outside the API.',
      },
      referenceKey: {
        type: DataTypes.UUID,
        allowNull: false,
        comment:
          'This is what we give to clients to reference this record. This allows us to rotate them in the event that a client has a breach.',
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mimeType: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment:
          'The MIME type of the file. If none is provided by the client, we assign one based on the format. If no format is provided, the default value is text/plain.',
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'The size of the file in KB',
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment:
          'The name of the file provided by the client. This is for their reference only.',
      },
      lastAccessedAt: {
        type: DataTypes.DATE,
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
      modelName: 'storageObject',
      underscored: true,
    },
  );
  return StorageObject;
};
