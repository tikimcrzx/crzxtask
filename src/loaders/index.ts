import expressLoader from './express';
import mongooseLoader from './mongoose';
import dependecyLoader from './dependecyInjector';
import Logger from './logger';
import chalk from 'chalk';

export default async ({ expressApp }) => {
  await mongooseLoader();
  Logger.info(chalk.magenta('DB Loaded and Connected!'));

  const commentModel = {
    name: 'commentModel',
    model: require('../models/comments.model').default,
  };

  const postModel = {
    name: 'postModel',
    model: require('../models/post.model').default,
  };

  const rolModel = {
    name: 'rolModel',
    model: require('../models/rol.model').default,
  };

  const tagModel = {
    name: 'tagModel',
    model: require('../models/tag.model').default,
  };

  const userModel = {
    name: 'userModel',
    model: require('../models/user.model').default,
  };

  await dependecyLoader({
    models: [commentModel, postModel, rolModel, tagModel, userModel],
  });
  Logger.info(chalk.magenta('Dependecy Injector loaded'));

  await expressLoader({ app: expressApp });
  Logger.info(chalk.magenta('Express Loaded'));
};
