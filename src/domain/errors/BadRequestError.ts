import { errorMessages } from './ErrorMessages'
import { ErrorNames } from './ErrorNames'

export class BadRequestError extends Error {
    constructor(message = errorMessages.badRequest) {
        super(message)

        this.name = ErrorNames.BAD_REQUEST
    }
}
