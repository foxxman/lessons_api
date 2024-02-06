import { logger } from "../config/logger";
import { AppDataSource } from "../config/dataSource";


const connectDB = async () => {
    try {
        await AppDataSource.initialize()
        logger.info(`BootTasks:db:synced`);
    } catch (error:any) {
        logger.error('BootTasks:db:error')
        logger.error(error.message)
    }   
}

export default connectDB;