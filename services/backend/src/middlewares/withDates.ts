import { NextFunction, Response } from "express";
import { CustomRequest } from "../../types";
import { RequestBody } from "../../types/requests";
import { CustomError } from "../errors";
import { sendResponse } from "../utils/http/send-response";
import httpStatus from "http-status";

export const withDates = async (
    req: CustomRequest<{}, RequestBody.PostLesson>, 
    res: Response,
    next: NextFunction,
) => {
    const { lastDate, firstDate } = req.body;
    if (!lastDate) {
        next()
    } else {
        const startDate = new Date(firstDate);
        const endDate = new Date(lastDate);

        if (startDate.getTime() < endDate.getTime()) {
            next()
        } else {
            const error = new CustomError('Invalid dates format')
            sendResponse(res, httpStatus.BAD_REQUEST, { error });
        }
    }
}