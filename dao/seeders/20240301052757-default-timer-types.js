'use strict';

const TABLE_NAME = 'timer_type';
const MINUTES = 1000 * 60;
const DEFAULT_SOUND_TYPE_ID = '1ee05bfd-9aaa-4630-b655-fa910e2e0e6c';
const RECORD_IDS = [
  'faf927aa-f6ef-46c1-b88e-42f7b664c0bb',
  '4e8d8f5c-e05c-4f27-b331-b6f2b79bb06f',
  '0d3eb21c-8f24-4e71-88e5-aa241b8ebb94',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentTimestamp = new Date();
    return queryInterface.bulkInsert(
      TABLE_NAME,
      [
        {
          created_at: currentTimestamp,
          id: RECORD_IDS[0],
          label: 'pomodoro',
          duration: 40 * MINUTES,
          sound_type_id: DEFAULT_SOUND_TYPE_ID,
          updated_at: currentTimestamp,
          version: '1',
        },
        {
          created_at: currentTimestamp,
          id: RECORD_IDS[1],
          label: 'short_break',
          duration: 5 * MINUTES,
          sound_type_id: DEFAULT_SOUND_TYPE_ID,
          updated_at: currentTimestamp,
          version: '1',
        },
        {
          created_at: currentTimestamp,
          id: RECORD_IDS[2],
          label: 'long_break',
          duration: 20 * MINUTES,
          sound_type_id: DEFAULT_SOUND_TYPE_ID,
          updated_at: currentTimestamp,
          version: '1',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(TABLE_NAME, {
      id: RECORD_IDS,
    });
  },
};
