import { BadRequestError } from '../../../domain/errors'
import { errorMessages } from '../../../domain/errors/ErrorMessages'
import { HttpStatusCode } from '../../../domain/http/HttpStatusCode'
import { BadRequestErrorHandler } from '../BadRequestErrorHandler'

describe('BadRequestErrorHandler', () => {
    it('Deve receber um NotFoundError e retornar status 400 com a mensagem "Invalid request."', () => {
        const sut = new BadRequestErrorHandler()

        const handledError = sut.handle(new BadRequestError())

        expect(handledError.message).toBe(errorMessages.badRequest)
        expect(handledError.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })

    it('Deve receber um BadRequestError e retornar status 400 com mensagem customizada."', () => {
        const sut = new BadRequestErrorHandler()

        const handledError = sut.handle(
            new BadRequestError('Custom error message.')
        )

        expect(handledError.message).toBe('Custom error message.')
        expect(handledError.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
    })
})
