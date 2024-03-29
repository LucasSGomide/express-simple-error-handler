import { ErrorRequestHandler } from 'express'
import { createErrorHandler } from './config/CreateErrorHandler'
import {
    BadRequestError,
    NotFoundError,
    InvalidPasswordError,
    UnauthorizedError,
    ForbiddenError,
} from './domain/errors'
import { ErrorsHandler } from './application/errorHandler/ErrorsHandler'
import { createErrorHandlerMiddleware } from './config/CreateErrorHandlerMiddleware'

const ErrorHandler = createErrorHandler()
const errorHandlerMiddleware = createErrorHandlerMiddleware()

export {
    ErrorHandler,
    errorHandlerMiddleware,
    BadRequestError,
    NotFoundError,
    InvalidPasswordError,
    UnauthorizedError,
    ForbiddenError,
    ErrorsHandler,
    ErrorRequestHandler,
}
