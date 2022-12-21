import { errorMessages } from './ErrorMessages'
import { ErrorNames } from './ErrorNames'

export class NotFoundError extends Error {
    constructor(message = errorMessages.notFound) {
        super(message)

        this.name = ErrorNames.NOT_FOUND
    }
}
