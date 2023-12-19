import { errorMessages } from './ErrorMessages'
import { ErrorNames } from './ErrorNames'

export class ForbiddenError extends Error {
    constructor(message = errorMessages.forbidden) {
        super(message)

        this.name = ErrorNames.FORBIDDEN
    }
}
