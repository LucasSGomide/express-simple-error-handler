import { ErrorRequestHandler } from 'express'
import { createErrorHandler } from './config/CreateErrorHandler'
import { BadRequestError, NotFoundError } from './domain/errors'
import { ErrorsHandler } from './application/errorHandler/ErrorsHandler'
import { createErrorHandlerMiddleware } from './config/CreateErrorHandlerMiddleware'

const ErrorHandler = createErrorHandler()
const errorHandlerMiddleware = createErrorHandlerMiddleware()

export {
    ErrorHandler,
    errorHandlerMiddleware,
    BadRequestError,
    NotFoundError,
    ErrorsHandler,
    ErrorRequestHandler
}
