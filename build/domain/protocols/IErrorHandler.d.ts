import { HttpStatusCode } from '../http/HttpStatusCode';
export interface IErrorHandler {
    errorName: string;
    handle: (error: Error) => {
        message: string;
        statusCode: HttpStatusCode;
    };
}
