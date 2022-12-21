import { errorMessages } from './ErrorMessages'
import { ErrorNames } from './ErrorNames'

export class InvalidPasswordError extends Error {
    constructor(message = errorMessages.invalidPassword) {
        super(message)

        this.name = ErrorNames.INVALID_PASSWORD
    }
}
