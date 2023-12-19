import { ErrorsHandler } from '../application/errorHandler/ErrorsHandler'
import {
    BadRequestErrorHandler,
    NotFoundErrorHandler,
    InvalidPasswordErrorHandler,
    UnauthorizedErrorHandler,
    ForbiddenErrorHandler,
} from '../application/handlers'

export function createErrorHandler() {
    return ErrorsHandler.build([
        new BadRequestErrorHandler(),
        new NotFoundErrorHandler(),
        new InvalidPasswordErrorHandler(),
        new UnauthorizedErrorHandler(),
        new ForbiddenErrorHandler(),
    ])
}
