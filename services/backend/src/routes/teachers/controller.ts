import { Request, Response } from "express";
import teacherService from "../../services/teachers";
import { sendResponse } from "../../utils/http/send-response";
import httpStatus from "http-status";

export const postTeacher = async (req: Request, res: Response) => {
    try {
        const teacher = await teacherService.postTeacher(req.body.name)
        sendResponse(res, httpStatus.OK, {
            result: {
                teacher,
            }
        })
    } catch (error:any) {
        sendResponse(res, httpStatus.OK, { error })
    }
}