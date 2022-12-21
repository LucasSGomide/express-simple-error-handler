import { ErrorRequestHandler } from 'express'
import { ErrorHandlerMiddleware } from '../application/errorHandlerMiddleware/ErrorHandlerMiddleware'
import { createErrorHandler } from './CreateErrorHandler'

export function createErrorHandlerMiddleware(): ErrorRequestHandler {
    const errorHandler = createErrorHandler()
    return ErrorHandlerMiddleware.build(errorHandler).getMiddleware()
}
