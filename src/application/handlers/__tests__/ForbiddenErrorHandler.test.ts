import { ForbiddenError } from '../../../domain/errors/ForbiddenError'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { ForbiddenErrorHandler } from '../ForbiddenErrorHandler'

describe('ForbiddenErrorHandler', () => {
    it('Should handle a ForbiddenError and return the default status code and message.', () => {
        const sut = new ForbiddenErrorHandler()

        const handledError = sut.handle(new ForbiddenError())

        expect(handledError.message).toBe(errorMessages.forbidden)
        expect(handledError.statusCode).toBe(HttpStatusCode.FORBIDDEN)
    })

    it('Should handle a ForbiddenError and return the default status code and a custom message.', () => {
        const sut = new ForbiddenErrorHandler()

        const handledError = sut.handle(
            new ForbiddenError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.FORBIDDEN)
    })
})
