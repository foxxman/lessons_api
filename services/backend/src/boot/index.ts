import connectDB from './connectDB';
import { logger } from '../config/logger';
import { startHttp } from './startHttp';

export const runBootTasks = async () => {
    logger.info('BootTasks:running:start');
    await connectDB();
    startHttp();
    logger.info('BootTasks:running:complete');
};
