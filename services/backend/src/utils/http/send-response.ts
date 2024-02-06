import { ErrorDetails } from './../../../types/index.d';
import { Response } from "express";

export interface IApiResponse {
    result?: {
        [key: string]: any;
    };
    error?: ErrorDetails;
}

export const sendResponse = async (
    res: Response,
    status: number,
    { result = {}, error }: IApiResponse = {},
): Promise<void> => {        
    const response = {
        success: result,
        error,
    };
    res.status(status).json(response);
};
