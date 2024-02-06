import { logger } from "../config/logger";
import { vars } from "../config/vars";
import http from "../services/http";

export const startHttp = async () => {
    logger.info('http:running:start');
    
    try {
        http.listen(vars.port, () => {
            logger.info(`http:running:complete; started on port: ${vars.port}`);
        });
    } catch (e: any) {
        logger.info(`http:running:error`);
        logger.error(e);
    }
};
