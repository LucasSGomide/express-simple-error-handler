import { ErrorsHandler } from '../application/errorHandler/ErrorsHandler'
import {
    BadRequestErrorHandler,
    NotFoundErrorHandler,
} from '../application/handlers'

export function createErrorHandler() {
    return ErrorsHandler.build([
        new BadRequestErrorHandler(),
        new NotFoundErrorHandler(),
    ])
}
