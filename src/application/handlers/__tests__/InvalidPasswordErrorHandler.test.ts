import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { InvalidPasswordError } from '../../../domain/errors/InvalidPasswordError'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { InvalidPasswordErrorHandler } from '../InvalidPasswordErrorHandler'

describe('InvalidPasswordErrorHandler', () => {
    it('Should handle a InvalidPasswordError and return the default status code and message.', () => {
        const sut = new InvalidPasswordErrorHandler()

        const handledError = sut.handle(new InvalidPasswordError())

        expect(handledError.message).toBe(errorMessages.invalidPassword)
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })

    it('Should handle a InvalidPasswordError and return the default status code and a custom message.', () => {
        const sut = new InvalidPasswordErrorHandler()

        const handledError = sut.handle(
            new InvalidPasswordError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })
})
