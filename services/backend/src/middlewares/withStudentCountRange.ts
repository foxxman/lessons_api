import { NextFunction, Response } from "express"
import { CustomRequest } from "../../types"
import { PathParameters } from "../../types/requests"

export const withStudentCountRange  = async (
    req: CustomRequest<PathParameters.GetLessons, {}>, 
    res: Response,
    next: NextFunction,
) => {
    const { studentsCount } = req.query;
    
    if (!studentsCount) {
        next();
    }

    const counts = String(studentsCount).split(',');

    if (counts.length > 2) {
        req.data = {
            ...req.data,
            studentsCountFrom: Number(counts[0]),
            studentsCountTo: Number(counts[1]),
        }
    } else {
        req.data = {
            ...req.data,
            studentsCount: Number(counts[0]),
        }
    }
    
    next();
}