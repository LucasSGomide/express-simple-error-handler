import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { IErrorsHandler } from '../../domain/protocols'
import { IErrorHandlerMiddleware } from '../../domain/protocols/IErrorHandlerMiddleware'

export class ErrorHandlerMiddleware implements IErrorHandlerMiddleware {
    constructor(private readonly errorHandler: IErrorsHandler) {}

    static build(errorHandler: IErrorsHandler): ErrorHandlerMiddleware {
        return new ErrorHandlerMiddleware(errorHandler)
    }

    getMiddleware(): ErrorRequestHandler {
        return (error: any, request: Request, response: Response, next: NextFunction) => {
            console.error(error)
            this.errorHandler.execute(error, response)
        }
    }
}
