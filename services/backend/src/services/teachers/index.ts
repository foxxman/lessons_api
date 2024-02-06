import httpStatus from "http-status";
import { Request, Response } from "express";
import { teacherRepository } from "../../db";
import { Teacher } from "../../db/models/Teacher";
import { sendResponse } from "../../utils/http/send-response";

const postTeacher = async (req: Request, res: Response) => {
    const { name } = req.body;

    const teacherModel = Object.assign(new Teacher(), {
        name,
    })
    const teacher = await teacherRepository.save(teacherModel)
    
    sendResponse(res, httpStatus.OK, {
        result: {
            teacher,
        }
    })
}

const teacherService = {
    postTeacher,
}

export default teacherService;