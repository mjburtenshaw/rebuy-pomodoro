require('dotenv').config();
const { dao } = require('./dao');
const cors = require('cors');
const db = require('../models');
const express = require('express');

async function startDao() {
  const { DAO_PORT } = process.env;
  const REQUEST_SIZE_LIMIT = '10mb';

  const server = express();

  server.use(express.json({ limit: REQUEST_SIZE_LIMIT }));
  server.use(
    express.urlencoded({ limit: REQUEST_SIZE_LIMIT, extended: false }),
  );
  server.use(cors());

  await db.sequelize.authenticate();

  server.use(dao.timer.v1.router);
  server.use(dao.timerType.v1.router);

  const httpServer = server.listen(DAO_PORT, () => {
    const url = `http://localhost:${DAO_PORT}`;
    console.info(`🛂 The DAO is ready to accept connections at ${url}`);
  });

  // Prevents local servers from hanging up when changes are detected.
  // See Also: [ts-node-dev fails to restarts after change](https://github.com/wclr/ts-node-dev/issues/318)
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, exiting.');
    process.exit(0);
  });

  return { dao: server, httpServer };
}

const server = {
  startDao,
};

module.exports = { server };
