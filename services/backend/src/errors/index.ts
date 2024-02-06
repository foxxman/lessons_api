
export class CustomError extends Error {
    status : number;

    constructor(message: string, status: number = 400) {
        super();
        this.status = status;
        this.message = message;
    }
}