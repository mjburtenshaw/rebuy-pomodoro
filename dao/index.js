const db = require('./models');

async function startDao(sequelize) {
  try {
    await sequelize.authenticate();
    console.log('🛂 The DAO is ready!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startDao(db.sequelize);
