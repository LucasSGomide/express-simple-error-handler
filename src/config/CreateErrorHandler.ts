import { ErrorsHandler } from '../application/errorHandler/ErrorsHandler'
import {
    BadRequestErrorHandler,
    NotFoundErrorHandler,
    InvalidPasswordErrorHandler,
    UnauthorizedErrorHandler,
} from '../application/handlers'

export function createErrorHandler() {
    return ErrorsHandler.build([
        new BadRequestErrorHandler(),
        new NotFoundErrorHandler(),
        new InvalidPasswordErrorHandler(),
        new UnauthorizedErrorHandler(),
    ])
}
