import { HttpStatusCode } from '../../domain/http/HttpStatusCode';
import { IErrorHandler } from '../../domain/protocols';
export declare class ForbiddenErrorHandler implements IErrorHandler {
    errorName: string;
    handle(error: Error): {
        message: string;
        statusCode: HttpStatusCode;
    };
}
