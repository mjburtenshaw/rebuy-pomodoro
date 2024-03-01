'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('storage_object', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      reference_key: {
        type: Sequelize.UUID,
        allowNull: false,
        comment:
          'This is what we give to clients to reference this record. This allows us to rotate them in the event that a client has a breach.',
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      mime_type: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment:
          'The MIME type of the file. If none is provided by the client, we assign one based on the format. If no format is provided, the default value is text/plain.',
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'The size of the file in KB',
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment:
          'The name of the file provided by the client. This is for their reference only.',
      },
      last_accessed_at: {
        type: Sequelize.DATE,
      },
      version: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('storage_object');
  },
};
