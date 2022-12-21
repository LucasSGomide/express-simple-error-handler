import { ErrorRequestHandler } from 'express'

export interface IErrorHandlerMiddleware {
    getMiddleware: ErrorRequestHandler
}
