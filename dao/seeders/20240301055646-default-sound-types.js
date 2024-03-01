'use strict';

const TABLE_NAME = 'sound_type';
const DEFAULT_SOUND_TYPE_ID = '1ee05bfd-9aaa-4630-b655-fa910e2e0e6c';
const DEFAULT_STORAGE_OBJECT_ID = 'f5fe4967-0040-4605-af02-66ceab56bbe0';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTimestamp = new Date();

    // Check if the record already exists
    const existingRecord = await queryInterface.rawSelect(
      TABLE_NAME,
      {
        where: {
          id: DEFAULT_SOUND_TYPE_ID,
        },
      },
      ['id'],
    );

    // If the record doesn't exist, insert it
    if (!existingRecord) {
      return queryInterface.bulkInsert(TABLE_NAME, [
        {
          id: DEFAULT_SOUND_TYPE_ID,
          label: 'chime',
          storage_object_id: DEFAULT_STORAGE_OBJECT_ID,
          version: '1',
          created_at: currentTimestamp,
          updated_at: currentTimestamp,
        },
      ]);
    }
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(TABLE_NAME, {
      id: [DEFAULT_SOUND_TYPE_ID],
    });
  },
};
