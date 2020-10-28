import 'reflect-metadata';
import config from './config';
import Logger from './loaders/logger';
import express from 'express';
import chalk from 'chalk';

async function startServer() {
  const app = express();
  await require('./loaders').default({ expressApp: app });
  app.listen(config.port, (err) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
      return;
    }

    Logger.info(`
        ##############################################
        ${chalk.magenta('Server listening on port ')}:${chalk.yellow(
      config.port,
    )}
        ##############################################
    `);
  });
}

startServer();
