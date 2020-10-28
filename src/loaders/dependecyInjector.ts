import { Container } from 'typedi';
import LoggerInstance from './logger';
import chalk from 'chalk';

export default ({ models }: { models: { name: string; model: any }[] }) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    });
    Container.set('logger', LoggerInstance);
    LoggerInstance.info(
      chalk.magenta('Logger and Models injected into Container'),
    );
  } catch (e) {
    LoggerInstance.error('Error on dependecy injector Loader %o', e);
    throw e;
  }
};
