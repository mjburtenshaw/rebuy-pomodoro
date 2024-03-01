require('dotenv').config();
const cors = require('cors');
const db = require('../models');
const express = require('express');

async function startDao() {
  const { DAO_PORT } = process.env;
  const REQUEST_SIZE_LIMIT = '10mb';

  const dao = express();

  dao.use(express.json({ limit: REQUEST_SIZE_LIMIT }));
  dao.use(express.urlencoded({ limit: REQUEST_SIZE_LIMIT, extended: false }));
  dao.use(cors());

  await db.sequelize.authenticate();

  const httpServer = dao.listen(DAO_PORT, () => {
    const url = `http://localhost:${DAO_PORT}`;
    console.info(`🛂 The DAO is ready to accept connections at ${url}`);
  });

  // Prevents local servers from hanging up when changes are detected.
  // See Also: [ts-node-dev fails to restarts after change](https://github.com/wclr/ts-node-dev/issues/318)
  process.on('SIGTERM', () => {
    console.verbose('SIGTERM received, exiting.');
    process.exit(0);
  });

  return { dao, httpServer };
}

const server = {
  startDao,
};

module.exports = { server };
