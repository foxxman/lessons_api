import httpStatus from "http-status";
import { Request, Response } from "express";
import { teacherRepository } from "../../db";
import { Teacher } from "../../db/models/Teacher";
import { sendResponse } from "../../utils/http/send-response";

const postTeacher = async (name: string) => {

    const teacherModel = Object.assign(new Teacher(), {
        name,
    })
    const teacher = await teacherRepository.save(teacherModel)
    
    return teacher;
}

const teacherService = {
    postTeacher,
}

export default teacherService;