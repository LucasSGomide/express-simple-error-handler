import { ErrorRequestHandler } from 'express';
import { IErrorsHandler } from '../../domain/protocols';
import { IErrorHandlerMiddleware } from '../../domain/protocols/IErrorHandlerMiddleware';
export declare class ErrorHandlerMiddleware implements IErrorHandlerMiddleware {
    private readonly errorHandler;
    constructor(errorHandler: IErrorsHandler);
    static build(errorHandler: IErrorsHandler): ErrorHandlerMiddleware;
    getMiddleware(): ErrorRequestHandler;
}
