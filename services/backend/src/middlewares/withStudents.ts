import { NextFunction, Response } from "express";
import { studentRepository } from "../db";
import { sendResponse } from "../utils/http/send-response";
import httpStatus from "http-status";
import { CustomRequest } from "../../types";
import { RequestBody } from '../../types/requests'
import { CustomError } from "../errors";

export const withStudents = async (
    req: CustomRequest<{}, RequestBody.PostLesson>, 
    res: Response,
    next: NextFunction,
) => {
    const { studentIds } = req.body;

    try {
        const students = await studentRepository
            .createQueryBuilder('student')
            .where('student.id IN (:...studentIds)', { studentIds })
            .getMany();

        const existingStudentsIds = students.map((teacher) => teacher.id);
        const missingStudentsIds = studentIds.filter((id) => !existingStudentsIds.includes(id));

        if (missingStudentsIds.length > 0) {
            throw new CustomError(`Invalid students ids: ${missingStudentsIds}`);
        }
            
        req.data = {
            ...req.data,
            students,
        }
        next();
    } catch (error: any) {
        sendResponse(res, httpStatus.BAD_REQUEST, { error });
    }
    
}