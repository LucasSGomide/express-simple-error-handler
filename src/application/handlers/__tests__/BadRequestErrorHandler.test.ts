import { BadRequestError } from '../../../domain/errors'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { BadRequestErrorHandler } from '../BadRequestErrorHandler'

describe('BadRequestErrorHandler', () => {
    it('Should handle a BadRequestError and return the default status code and message.', () => {
        const sut = new BadRequestErrorHandler()

        const handledError = sut.handle(new BadRequestError())

        expect(handledError.message).toBe(errorMessages.badRequest)
        expect(handledError.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })

    it('Should handle a BadRequestError and return the default status code and a custom message.', () => {
        const sut = new BadRequestErrorHandler()

        const handledError = sut.handle(
            new BadRequestError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })
})
