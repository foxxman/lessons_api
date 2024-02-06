import { NextFunction, Response } from "express"
import { CustomRequest } from "../../types"
import { PathParameters } from "../../types/requests"

export const withDateRange  = async (
    req: CustomRequest<PathParameters.GetLessons, {}>, 
    res: Response,
    next: NextFunction,
) => {
    const { date } = req.query;
    
    if (!date) {
        next();
    }

    const dates = String(date).split(',');

    if (dates.length > 2) {
        req.data = {
            ...req.data,
            startDate: new Date(dates[0]),
            endDate: new Date(dates[1]),
        }
    } else {
        req.data = {
            ...req.data,
            date: new Date(dates[0]),
        }
    }
    
    next();
}