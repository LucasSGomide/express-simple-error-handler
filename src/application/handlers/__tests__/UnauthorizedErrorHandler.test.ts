import { UnauthorizedError } from '../../../domain/errors/UnauthorizedError'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { UnauthorizedErrorHandler } from '../UnauthorizedErrorHandler'

describe('UnauthorizedErrorHandler', () => {
    it('Should handle a UnauthorizedError and return the default status code and message.', () => {
        const sut = new UnauthorizedErrorHandler()

        const handledError = sut.handle(new UnauthorizedError())

        expect(handledError.message).toBe(errorMessages.unauthorized)
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })

    it('Should handle a UnauthorizedError and return the default status code and a custom message.', () => {
        const sut = new UnauthorizedErrorHandler()

        const handledError = sut.handle(
            new UnauthorizedError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.UNAUTHORIZED)
    })
})
