import { NextFunction, Response } from "express"
import { CustomRequest } from "../../types"
import { PathParameters } from "../../types/requests"

export const withTeacherIdsList  = async (
    req: CustomRequest<PathParameters.GetLessons, {}>, 
    res: Response,
    next: NextFunction,
) => {
    const { teacherIds } = req.query;
    
    if (teacherIds) {
        req.data = {
            ...req.data,
            teacherIds: String(teacherIds)
                .split(',')
                .map(id => Number(id))
                .filter(id => !isNaN(id)),
        }
    }
 
    next();
}