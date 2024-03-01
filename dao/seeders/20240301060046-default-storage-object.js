'use strict';

const TABLE_NAME = 'storage_object';
const DEFAULT_STORAGE_OBJECT_ID = 'f5fe4967-0040-4605-af02-66ceab56bbe0';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTimestamp = new Date();
    return queryInterface.bulkInsert(TABLE_NAME, [
      {
        id: DEFAULT_STORAGE_OBJECT_ID,
        reference_key: 'ddd421f0-8898-4897-9b7c-33957c350635',
        url: 'storage://sound-types/dd1d6231-7587-4f67-aa7c-1f0df1b8182f.mp3',
        mime_type: 'audio/mpeg',
        size: 29,
        name: 'chime',
        version: '1',
        created_at: currentTimestamp,
        updated_at: currentTimestamp,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(TABLE_NAME, {
      id: [DEFAULT_STORAGE_OBJECT_ID],
    });
  },
};
