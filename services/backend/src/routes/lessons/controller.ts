import { Response } from "express";
import { CustomRequest } from "../../../types";
import { PathParameters, RequestBody } from '../../../types/requests'
import { postLessons, getLessons } from "../../services/lessons";
import { Student } from "../../db/models/Student";
import { Teacher } from "../../db/models/Teacher";
import { sendResponse } from "../../utils/http/send-response";
import httpStatus from "http-status";

interface postLessonData {
    students: Student[],
    teachers: Teacher[],
}

interface getLessonsData {
    studentsCountFrom?: number,
    studentsCountTo?: number,
    studentsCount?: number,

    startDate?: Date,
    endDate?: Date,
    date?: Date,

    status?: boolean,
    teacherIds?: number[],
}

export const postLesson = async (
        req: CustomRequest<{}, RequestBody.PostLesson>, 
        res: Response,
    ) => {
        const {
            title,
            days,
            firstDate,
            lessonsCount,
            lastDate,
        } = req.body;

        const {
            students,
            teachers,
        } = req.data as postLessonData;

        try {
            const createdLessons = await postLessons({
                title,
                days,
                firstDate,
                lessonsCount,
                lastDate,
                students,
                teachers,
            });
            
            sendResponse(res, httpStatus.OK, { result: { createdLessons } })
        } catch (error:any) {
            sendResponse(res, httpStatus.INTERNAL_SERVER_ERROR, { error })
        }
        
    }

export const getLesson = async (req: CustomRequest<PathParameters.GetLessons, {}>, res: Response,) => {
    console.log(req.query);

    const {
        lessonsPerPage,
        page,
        status,
    } = req.query
    
    try {
        const lessons = await getLessons({
            ...req.data,
            lessonsPerPage: Number(lessonsPerPage) || undefined,
            page: Number(page) || undefined,
            status: typeof status === "undefined" ? status : String(status),
        })

        sendResponse(res, httpStatus.OK, {
            result: { lessons }
        })
    } catch (error:any) {
        sendResponse(res, httpStatus.BAD_REQUEST, { error })
    }
}