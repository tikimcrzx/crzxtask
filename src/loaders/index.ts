import expressLoader from './express';
import mongooseLoader from './mongoose';
import dependecyLoader from './dependecyInjector';
import Logger from './logger';
import chalk from 'chalk';

export default async ({ expressApp }) => {
  await mongooseLoader();
  Logger.info(chalk.magenta('DB Loaded and Connected!'));

  const rolModel = {
    name: 'rolModel',
    model: require('../models/rol.model').default,
  };

  await dependecyLoader({
    models: [rolModel],
  });
  Logger.info(chalk.magenta('Dependecy Injector loaded'));

  await expressLoader({ app: expressApp });
  Logger.info(chalk.magenta('Express Loaded'));
};
