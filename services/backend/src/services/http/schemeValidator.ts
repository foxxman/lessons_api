import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import httpStatus from 'http-status';
import { sendResponse } from '../../utils/http/send-response';

export const schemeValidator = (scheme: Schema) => (
    async (req: Request, res: Response, next: NextFunction) => {
        const result = scheme.validate(req);
        
        if (result.error) {
            const details = result.error.details[0];
            
            const error = {
                message: details.message,
            }

            sendResponse(res, httpStatus.BAD_REQUEST, { error })
            return;
        }
        
        next();
    }
);
