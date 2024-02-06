import { createConnection } from "typeorm";
import { logger } from "../config/logger";
import { AppDataSource } from "../config/dataSource";


const connectDB = async () => {
    await AppDataSource.initialize()
    .then(() => {
        logger.info(`BootTasks:db:synced`);
    })
    .catch((error) => {
        logger.error('BootTasks:db:error')
        logger.error(error.message)
    });
}

export default connectDB;