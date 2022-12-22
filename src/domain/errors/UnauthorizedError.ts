import { errorMessages } from './ErrorMessages'
import { ErrorNames } from './ErrorNames'

export class UnauthorizedError extends Error {
    constructor(message = errorMessages.unauthorized) {
        super(message)

        this.name = ErrorNames.UNAUTHORIZED
    }
}
