import httpStatus from "http-status";
import { NextFunction, Response } from "express";
import { teacherRepository } from "../db";
import { sendResponse } from "../utils/http/send-response";
import { CustomRequest } from "../../types";
import { RequestBody } from '../../types/requests'
import { CustomError } from "../errors";

export const withTeachers = async (
    req: CustomRequest<{}, RequestBody.PostLesson>, 
    res: Response,
    next: NextFunction,
) => {
    const { teacherIds } = req.body;

    try {
        const teachers = await teacherRepository
            .createQueryBuilder('teacher')
            .where('teacher.id IN (:...teacherIds)', { teacherIds })
            .getMany();

        const existingTeachersIds = teachers.map((teacher) => teacher.id);
        const missingTeachersIds = teacherIds.filter((id) => !existingTeachersIds.includes(id));

        if (missingTeachersIds.length > 0) {
            throw new CustomError(`Invalid teachers ids: ${missingTeachersIds}`);
        }

        req.data = {
            ...req.data,
            teachers,
        }
        next();
    } catch (error: any) {
        sendResponse(res, httpStatus.BAD_REQUEST, { error });
    }
}