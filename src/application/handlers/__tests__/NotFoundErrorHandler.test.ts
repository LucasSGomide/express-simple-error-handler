import { NotFoundError } from '../../../domain/errors'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { NotFoundErrorHandler } from '../NotFoundErrorHandler'

describe('NotFoundErrorHandler', () => {
    it('Should handle a NotFoundError and return the default status code and message.', () => {
        const sut = new NotFoundErrorHandler()

        const handledError = sut.handle(new NotFoundError())

        expect(handledError.message).toBe(errorMessages.notFound)
        expect(handledError.statusCode).toBe(HttpStatusCode.NOT_FOUND)
    })

    it('Should handle a NotFoundError and return the default status code and a custom message.', () => {
        const sut = new NotFoundErrorHandler()

        const handledError = sut.handle(
            new NotFoundError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.NOT_FOUND)
    })
})
